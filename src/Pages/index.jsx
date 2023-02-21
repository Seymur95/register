import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Error } from '../Components'
import Home from './Home'
import SigIn from './SignIn'
import SignUp from './SignUp'

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
        <Route index element={<SigIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path="home" element={<Home />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Index
