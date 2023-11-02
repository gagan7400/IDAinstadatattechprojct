import React from 'react'

export default function Navbar() {
  return (
    <div>

  <nav className="navbar navbar-expand-lg bg-body-tertiary ps-lg-5 pe-lg-5">   
    <div className="container-fluid ">
    <a className="navbar-brand ps-lg-4" href="#"><img width={'150px'} className='ps-3' src="https://www.instadatatech.com/assets/images/general/logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 " style={{marginLeft:'18%'}}>
        <li className="nav-item">
          <a className="nav-link text-info fs-5"  aria-current="page" href="#"><span style={{fontWeight:'600'}} className='text-dark'>Home</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><span style={{fontWeight:'600'}} className='text-dark'>Products</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><span style={{fontWeight:'600'}} className='text-dark'>Services</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><span style={{fontWeight:'600'}} className='text-dark'>Blog</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><span style={{fontWeight:'600'}} className='text-dark'>About</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><span style={{fontWeight:'600'}} className='text-dark'>Contact</span></a>
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
