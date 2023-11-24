import React, { useState } from 'react'
import * as S from "./styleSales"
import { auth, database } from '../../../../firebase/firebase'
import { get, push, ref, update } from 'firebase/database'

const AddStock = ({ setSalesActive, setSelected, setQuantityError }) => {
    const [sold, setSold] = useState(1)
    const [brand, setBrand] = useState("")
    const [name, setName] = useState("")

    const UpdateProducts = (id, product) => {
        const db = database;
        const refSales = ref(db, `users/${id}/products/sales`);
        const refStock = ref(db, `users/${id}/products/stock/`);
        get(refStock).then((snapshot) => {
            if (snapshot.exists()) {
                const data = Object.entries(snapshot.val());
                return Promise.all(data.map((element) => {
                    if ((element[1].brand).toUpperCase() === (product.brand).toUpperCase()
                        && (element[1].name).toUpperCase() === (product.name).toUpperCase()) {
                        const newrefStock = ref(db, `users/${id}/products/stock/${element[0]}`);
                        const newsoldvalue = Number(element[1].sold) + Number(product.sold)
                        const newquantity = element[1].quantity - product.sold
                        if (newquantity >= 0) {
                            update(newrefStock, { "sold": `${newsoldvalue}`, "quantity": `${newquantity}` })
                        }
                        else {
                            alert("You can't remove more than you have in stock")
                            return Promise.reject(new Error("Negative quantity"))

                        }
                        return Promise.resolve()
                    }

                }))

            }
            else {
                alert("You can't sell what you dont have in stock")
                return Promise.reject(new Error("Missing Stock"))
            }
        })
            .then(() => {
                push(refSales, product)
            })
            .catch((error) => {
                console.log(error)
                return Promise.reject(error)
            })
    }
    const OnClickSubmitSales = (e) => {
        e.preventDefault();
        if(brand && name && sold){
        const product = { brand, name, sold }
        
        UpdateProducts(auth.currentUser.uid, product)
        setSalesActive(false)
        setBrand("")
        setName("")
        setSold(1)
        setSelected("sales")
    }
    else{
        alert("You need to fill all the necessary fields")
    }

    }

    return (
        <S.Wrapper>
            <S.CloseW>
                <h1>Add to Stock </h1>
                <h1 onClick={()=>setSalesActive(false)} style={{cursor:"pointer"}}>X</h1>
            </S.CloseW>
            <S.Form>
                <S.tInput
                    type="text"
                    placeholder='Brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)} />
                <S.tInput
                    type="text"
                    placeholder='Product'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <S.iWrapper>
                    <label>Quantity sold:</label>
                    <S.nInput type="number" placeholder='Sold' value={sold} onChange={(e) => setSold(e.target.value)} />
                </S.iWrapper>
                <S.Button type='submit' onClick={(e) => OnClickSubmitSales(e)}>ADD</S.Button>
            </S.Form>
        </S.Wrapper>
    )

}
export default AddStock