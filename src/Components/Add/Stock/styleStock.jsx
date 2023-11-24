import styled from 'styled-components';




export const Wrapper=styled.div`
    position:fixed;
    margin:auto;
    background-color:#f5f5f5;
    width:25%;
    height:30%;
    z-index:2;
    border:1px solid black;
    border-radius:10px;
    text-align:center;

`
export const Form=styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const tInput=styled.input`
    width:60%;
    height:4vh;
    margin:5px;
    border-radius:10px;
    border:1px solid black;
    padding-left:10px;
`
export const nInput=styled.input`
    width:10%;
    height:3vh;
    border-radius:5px;
    border:1px solid black;
    text-align:center;

`
export const iWrapper=styled.div`
display:flex;
width:60%;
justify-content:flex-end;
align-items:center;
`
export const Button=styled.button`
    width:30%;
    height:2vh;
    background-color:#FFF;
    border-radius:20px;
    border:1px solid black;
    cursor:pointer;
    &:hover{
        background-color:#dcdcdc
    }
`
export const CloseW=styled.div`
display:flex;
justify-content:space-between;
margin:10px;
`