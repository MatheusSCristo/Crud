import React, { useState } from 'react'
import * as S from "./loginStyles"
import { auth } from '../../../firebase/firebase'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate} from "react-router-dom" 


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()

  const HandleonClickSignIn = (e) => {
    e.preventDefault();
  
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };


  return (
    <S.Wrapper>
      <S.h1>Already registered?</S.h1>
      <S.h1>Log in to start working!</S.h1>
      <S.form>
        <S.Input type='email'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} ></S.Input>
        <S.Input type='password'
          placeholder='Your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}></S.Input>
        <S.LoginButtons>
          <S.Button type='submit' onClick={(e) => HandleonClickSignIn(e)}>Log in</S.Button>
          <S.LoginH2 onClick={()=>{navigate("/register")}}>Not registered yet?</S.LoginH2>
        </S.LoginButtons>
      </S.form>
    </S.Wrapper>
  )
}

export default Login