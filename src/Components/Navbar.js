import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="./"><span className='badge fs-1'>ECGLOBAL-PETROL</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="./">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Profile">Profiles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./About">About-US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./About">Petrol Station</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/Products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Products">Petrol-Station</a></li>
            <li><a className="dropdown-item" href="/Products">Real-Estate</a></li>
            <li><a className="dropdown-item" href="/Products">Others</a></li>
          </ul>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar