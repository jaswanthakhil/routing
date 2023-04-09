import React from 'react';
import './App.css';
import About from './Components/About';
import Content from './Components/Content';
import Header from './Components/Header';
import Contact from './Components/Contact';

import Login from './Components/Login';
import {Routes, Route, BrowserRouter,Navigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard';

export default function App(){
  // const location = window.location.pathname
  // console.log(location);
  return (
    <BrowserRouter>
         <Header />
      <Routes>     
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
     
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Dashboard />} /> */}
          <Route path="/home" element={<Navigate replace to="/login" />} />
          <Route index element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
};
