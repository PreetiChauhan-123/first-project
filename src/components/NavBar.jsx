import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../Assets/nav_logo.jpg"

const NavBar = () => {
  return (
    <section className='nav'>
    <div className="logo"><img src={img1} alt="" /></div>
    <div className="navlinks">
    <Link to={"/"}>Login</Link>
    <Link to={"/signup"}>Signup</Link>
    <Link to={"/contact"}>Contact</Link>
    </div>
   
    </section>
  )
}

export default NavBar