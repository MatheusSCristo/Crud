import styled from "styled-components"

export const Wrapper=styled.div`
    width:40%;
    min-height:80vh;
    background-color:#FFF;
    border-radius:20px;
    display:flex;
    align-items:center;
    flex-direction:column;
   
`
export const Button=styled.button`
    width:30%;
    height:40px;
    background-color:${((props)=>props.color)};
    border:none;
    border-radius:10px;
    font-weight:bold;
    margin:5px;
    cursor: pointer;
`
export const Container=styled.div`
    display:flex;
    margin-top:10px;
    justify-content:center;
    width:100%;
    align-items:center;
    position:relative;

 `
 
 export const Input=styled.input`
    background-color:#EFEFEF;
    width:70%;
    height:50px;
    border:none;
    border-radius:10px;
    border-top-right-radius:0px;
    border-bottom-right-radius:0px;
    padding-left:10px;
 `

export const SearchImg=styled.img`

    width:50px;
    height:auto;
    background-color:#EFEFEF;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    cursor:pointer;
    padding:5px;

`
export const SelectButton=styled.button`
    width:15%;
    height:20px;
    margin-top:20px;
    margin-right:30px;
    background-color:${((props)=>props.color)}; 
    border:none;
    border-radius:5px;
    opacity:0.9;
    &:hover{
        opacity:1;
    }
`
export const ContainerSelect=styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
   
`

export const LogoutButton=styled.button`
    width:30px;
    height:30px;
    position:absolute;
    right:0;
    margin:15px;
    background-image:url("./logout.svg");
    background-size:contain;
    cursor: pointer;
    border:none;
    background-color:#FFF

`