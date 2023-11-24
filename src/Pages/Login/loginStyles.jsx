import styled from "styled-components"

export const Wrapper = styled.div`
    width:30%;
    height:40vh;
    background-color:#FFF;
    border-radius:20px;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
   
`
export const Input = styled.input`
    background-color:#EFEFEF;
    width:70%;
    height:50px;
    border:none;
    border-radius:10px;
    padding-left:10px;
    margin-top:20px;
 `


export const Button = styled.button`
    
    width:30%;
    height:2vh;
    background-color:#9b9b9bf0;
    border:none;
    border-radius:5px;
    cursor:pointer;
 `
export const h1 = styled.h1`
    
 `
export const form = styled.form`
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 `

export const LoginButtons=styled.div`
width:70%;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px;

`
export const LoginH2=styled.h2`
font-size:1em;
color:#818181;
cursor: pointer;
&:hover{
    color:#af4141;
}
`