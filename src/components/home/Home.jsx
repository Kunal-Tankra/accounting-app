import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Karigar from './Karigar'
import Bullion from "./Bullion"
import Customer from "./Customer"
import Supplier from "./Supplier"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Form from '../form/Form'

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // navigate to karigar initially
    navigate("karigar", { replace: true })
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Form />
      <Navbar />
      <Routes>

        <Route index element={<Karigar />} />
        <Route exact path='karigar' element={<Karigar />} />
        <Route exact path='bullion' element={<Bullion />} />
        <Route exact path='customer' element={<Customer />} />
        <Route exact path='supplier' element={<Supplier />} />
      </Routes>

    </>
  )
}

export default Home
