import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = (e) => {
    setShowDropdown(!showDropdown);
    
  }
  return (<div>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-2">
            <li className="nav-item">
                         <NavLink className=" nav-link text-light" to="/home" activeclassname="btn btn-danger">Home</NavLink>
                        </li>
            <li className="nav-item">
              <NavLink className=" nav-link text-light" to="/refresh" >Refresh</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" nav-link text-light" to="/slidebar">SlideBar</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className=" nav-link text-light" to="/myprojects" >My Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" nav-link text-light" to="/mytopics"  >My Topics</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className=" nav-link text-light" to="/about"  >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" nav-link text-light" to="/contact"  >Contact Us</NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle text-light" to="dropdown-menu" role="button" data-bs-toggle="dropdown"   onClick={(e) => { return (toggleDropdown(e)) }}>
                User
              </NavLink>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/logout">Logout</NavLink></li>
                </ul>
              )}
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  )
}