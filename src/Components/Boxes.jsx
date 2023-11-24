import React, { useEffect, useState } from 'react'
import * as S from "./boxesStyle"
import { auth, database } from '../../firebase/firebase';
import { onValue, ref, remove } from 'firebase/database';

const Boxes = ({selected,search}) => {
    const db = database;
    const [products, setProducts] = useState([])
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const reference = ref(db, `users/${auth.currentUser.uid}/products/${selected}`);
                onValue(reference, (snapshot) => {
                    const data = snapshot.val();                    
                    if(data)
                    setProducts(Object.entries(data))
                    else{  
                        setProducts([])
                    }
                    
                    
                });
            }
        })
    }, [selected]);

    const handleRemove=(id)=>{
        const reference = ref(db, `users/${auth.currentUser.uid}/products/${selected}/${id}`);
        remove(reference)
    }

    

    return (
        products && products.map((entry, i) =>{
        if((entry[1].name.toUpperCase().includes(search.toUpperCase()) || entry[1].brand.toUpperCase().includes(search.toUpperCase()))){
            return(
            <S.Product key={i}>
                <S.h1>{entry[1].name}</S.h1>
                <S.h2>Brand:{entry[1].brand}</S.h2>
                {selected === "stock" && <S.h3>In Stock:{entry[1].quantity}</S.h3>}
                <S.h3>Sold:{entry[1].sold}</S.h3>
                <S.Trash src={"./delete.svg"} onClick={()=>handleRemove(entry[0])}/>
            </S.Product>)}
        })
    )
}

export default Boxes