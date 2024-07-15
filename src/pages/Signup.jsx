import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BiHide } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate = useNavigate()



  const [crendential,setCrendential]=useState({
    username:"",
    password:"",
    confirmpass:"",
  })

  let{username,password,confirmpass}=crendential;

  let handleChange=(e)=>{
    let {value,name}=e.target
    setCrendential({...crendential,[name]:value})
}

let handleSubmit = async(e)=>{
  e.preventDefault();

  if (password==confirmpass) {
       let data = await axios.post("http://localhost:5000/employees",{username,password})
       if (data.status==201) {
        toast.success("user is created")
        setTimeout(() => {
          navigate("/")
        }, 1000);
       }
       else{
        toast.error("Something went wrong ")
       }
    console.log(data)
  }
  toast.error("Enter Same Confirm password")

}

  return (
    <section className='signup'>
    <form action="" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="name">
          <input type="text" placeholder="Enter your email" name='username' onChange={handleChange}/>
        </div>
        <div className="name">
          <input type="password" placeholder="Create your password" name='password' onChange={handleChange} />
          <BiHide />
        </div>
        <div className="name">
          <input type="password" placeholder="Confirm your password" name='confirmpass' onChange={handleChange}/>
          <BiHide />
        </div>
        <button className="b2">Signup</button>
        <p>Aready have an account?<Link to={"/"}>Login</Link></p>
      </form>
    </section>
  )
}

export default Signup