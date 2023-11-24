import React, { useState } from 'react'
import * as S from "./registerStyles"
import { useNavigate } from "react-router-dom"
import { auth, database } from '../../../firebase/firebase'
import { createUserWithEmailAndPassword, updatePhoneNumber, updateProfile } from "firebase/auth"
import { ref, set } from 'firebase/database'

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")


  const navigate = useNavigate()
  const WriteUserData = (userId, name, email) => {
    const db = database;
    const reference = ref(db, 'users/' + userId)

    set(reference, {
      username: name,
      email,

    })
  }


  const HandleonClickRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
      })
      .then(() => {
        WriteUserData(auth.currentUser.uid, name, email)
      })
      .then(() => {
        navigate("/")
      })


      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }
  return (
    <S.Wrapper>
      <S.h1>Not registered?</S.h1>
      <S.h1>Register to start working!</S.h1>
      <S.form>
        <S.Input type='text'
          placeholder='What would you like to be called?'
          value={name}
          onChange={(e) => setName(e.target.value)}></S.Input>
        <S.Input type='email'
          placeholder='Your email'
          value={email}
          onChange={((e) => setEmail(e.target.value))}></S.Input>
        <S.Input type='password'
          placeholder='Your password'
          value={password}
          onChange={((e) => setPassword(e.target.value))}></S.Input>
        <S.LoginButtons>
          <S.Button typeof='submit' onClick={(e) => HandleonClickRegister(e)}>Register</S.Button>
          <S.LoginH2 onClick={()=>navigate("/login")} >Already have an account?</S.LoginH2>
        </S.LoginButtons>
      </S.form>
    </S.Wrapper>
  )
}

export default Register