import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg  ps-lg-5 pe-lg-5" style={{ background: 'linear-gradient(120deg, rgba(248, 249, 249, 1) 0%, rgba(172, 235, 251, 1) 19%, rgba(172, 235, 251, 1) 39%, rgba(255, 255, 255, 1) 69%,rgba(172, 235, 251, 1) 89%,#c785fd 100%)'}}>   
    <div className="container-fluid ">
    <NavLink className="navbar-brand ps-lg-4" to='/'><img width={'150px'} className='ps-3' src="logo1111.png" alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 " style={{marginLeft:'18%'}}>
        <li className="nav-item">
          <NavLink className="nav-link text-info fs-5 "  aria-current="page" to='/'><span style={{fontWeight:'600',fontFamily: "'Roboto', sans-serif" }} className=' Hover_'>Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" to='/products'><span style={{fontWeight:'600',fontFamily: "'Roboto', sans-serif" }} className=' Hover_'>Products</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" to='/services'><span style={{fontWeight:'600',fontFamily: "'Roboto', sans-serif" }} className=' Hover_'>Services</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" to='/blog'><span style={{fontWeight:'600',fontFamily: "'Roboto', sans-serif" }} className=' Hover_'>Blog</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" to='/about'><span style={{fontWeight:'600',fontFamily: "'Roboto', sans-serif" }} className=' Hover_'>About</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" to='/contact'><span style={{fontWeight:'600',fontFamily: "'Roboto', sans-serif" }} className=' Hover_'>Contact</span></NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
        <span className='bi bi-sun fs-2 text-warning'style={{fontWeight:'900'}}></span>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}