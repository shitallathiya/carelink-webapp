import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Appointment from './Appointment';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

// import NoPage from "./pages/NoPage"; 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path='signup' element={<Signup />}/>
        <Route path='appointment' element={<Appointment/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
