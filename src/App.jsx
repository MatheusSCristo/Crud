import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import {Outlet} from "react-router-dom"



const App = ({ children }) => {
  return (
    <>
    {children}
    </>
  )
}

export default App