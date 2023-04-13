import React from 'react';
import './App.css';
import About from './Components/About';
import Content from './Components/Content';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Login from './Components/Login';
import { Routes, Route, BrowserRouter, HashRouter as Router, Navigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard';

export default function App() {
  // const location = window.location.pathname
  // console.log(location);
  return (
    <Router>
      <Header />
      <Routes>
   
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myprojects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route index element={<Content />} />
   
      </Routes>
    </Router>
  );
};
