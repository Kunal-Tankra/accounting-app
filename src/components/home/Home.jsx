import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Form from '../form/Form'
import AllContexts from '../../contextAPI/Context'
import MainPage from './MainPage'

const Home = () => {
  // context
  const  {usersData} = useContext(AllContexts)

  // navigate
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

        {/* <Route index element={<MainPage />} /> */}
        <Route exact path='karigar' element={<MainPage users={usersData.filter((user=>user.party === "Karigar"))} />} />
        <Route exact path='bullion' element={<MainPage users={usersData.filter((user=>user.party === "Bullion"))} />} />
        <Route exact path='customer' element={<MainPage users={usersData.filter((user=>user.party === "Customer"))} />} />
        <Route exact path='supplier' element={<MainPage users={usersData.filter((user=>user.party === "Supplier"))} />} />
      </Routes>

    </>
  )
}

export default Home
