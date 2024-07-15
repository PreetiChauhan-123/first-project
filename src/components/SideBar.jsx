import React from 'react'
import { Link } from 'react-router-dom'
import img from "../Assets/home1_logo.jpg"

const SideBar = ({info}) => {
  console.log(info)
  return (
    
    <div className='sidebar'>
    <div className="sidelogo"><div className="logo"><img src={img} alt="" /></div></div>
    <div className="sidelower">
    <p>{info?.ENAME}</p>
    <div className="one"><Link to={"/home/createUser"}><h2>CreateUser</h2>
    </Link></div>
    <div className="one"><Link to={"/home"}><h2>AllUser</h2></Link></div>

    </div>
    </div>
  )
}

export default SideBar