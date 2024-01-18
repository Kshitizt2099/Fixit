import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Form from './Components/Consultancy_form/Form'
import Doctors from './Components/Doctors/Doctors'
import Success from './Components/Success/Success'
import Error from './Components/Error/Error'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/c_form' element={<Form/>}/>
        <Route exact path='/Doctors/:State' element={<Doctors/>}/>
        <Route exact path="/Success/:msg/:path" element={<Success/>} />
        <Route exact path="/Error/:msg/:path" element={<Error/>} />

      </Routes>
    </div>
  )
}

export default App

