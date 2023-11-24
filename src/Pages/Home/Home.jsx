import React, { useEffect, useState } from 'react'
import Boxes from '../../Components/Boxes'
import * as S from "./homeStyles"
import { ref, onValue, update, push } from "firebase/database";
import { auth, database } from '../../../firebase/firebase';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import AddStock from '../../Components/Add/Stock/AddStock';
import AddSales from '../../Components/Add/Sales/addSales';

const Home = () => {
  const navigate = useNavigate()
  const db = database;
  const [selected, setSelected] = useState("stock")
  const [stockActive,setStockActive]=useState(false)
  const [salesActive,setSalesActive]=useState(false)
  
  const [search,setSearch]=useState("")

  const handleSignOut= async ()=>{
    try{
      await auth.signOut();
      navigate("/login")
    }catch (error) {
      console.error('Error during logout:', error);
  }
  }

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(!user){
        navigate("/login")
      }
    })
  })


  return (
    <>

    {stockActive && 
    <AddStock 
    setStockActive={setStockActive}
    setSelected={setSelected}
    />}
    {salesActive && <AddSales setSalesActive={setSalesActive} selected={selected} setSelected={setSelected}/>
    }
    <S.Wrapper>
      <S.Container>
        <S.Button color='#84F169' onClick={()=>setStockActive(true)}>Add to Stock</S.Button>
        <S.Button color='#F17169' onClick={()=>setSalesActive(true)}>Add to Sales</S.Button>
        <S.LogoutButton onClick={handleSignOut}/>
      </S.Container>
      <S.Container>
        <S.Input type='text' placeholder='Search a product' value={search} onChange={(e)=>setSearch(e.target.value)}></S.Input>
        <S.SearchImg src='/search.svg'/>
      </S.Container>
      <S.ContainerSelect>
        <S.SelectButton color={selected === "stock" ? "#2BB708" : '#84F169'} onClick={() => setSelected("stock")}>Stock</S.SelectButton>
        <S.SelectButton color={selected === "sales" ? "#FF372B" : '#F17169'} onClick={() => setSelected("sales")}>Sales</S.SelectButton>
      </S.ContainerSelect>
      <Boxes selected={selected} search={search}/>
    </S.Wrapper>
    </>
  )
}

export default Home