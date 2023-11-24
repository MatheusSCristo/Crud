import React, { useState } from 'react'
import * as S from "./styleStock"
import { push, ref } from 'firebase/database';
import { auth, database } from '../../../../firebase/firebase';

const AddStock = ({ setStockActive,setSelected }) => {
  const [quantity,setQuantity]=useState(1)
  const [brand,setBrand]=useState("")
  const [name,setName]=useState("")
  const UpdateProducts = (id, products) => {
    const db = database;
    const reference = ref(db, `users/${id}/products/stock`);
    push(reference, products)
  }

  const OnClickSubmitStock=(e)=>{
    e.preventDefault();
    if(brand && name && quantity){
    const product={brand,name,quantity,sold:0}
    UpdateProducts(auth.currentUser.uid,product)
    setStockActive(false)
    setBrand("")
    setName("")
    setQuantity(1)
    setSelected("stock")
  }
    else{
      alert("You need to fill all the necessary fields")
    }
  }



  return (
    <S.Wrapper>
      <S.CloseW>
        <h1>Add to Stock </h1>
        <h1 onClick={()=>setStockActive(false)} style={{cursor:"pointer"}}>X</h1>
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
          <label>Quantity:</label>
          <S.nInput type="number" placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </S.iWrapper>
        <S.Button type='submit' onClick={(e) => OnClickSubmitStock(e)}>ADD</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default AddStock