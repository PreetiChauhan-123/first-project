import React, { useContext, useState } from 'react'
import { BiHide } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { globalVal } from '../GlobalContext/ContextApi'
import toast from 'react-hot-toast'

const Login = () => {
  let navigate = useNavigate()

  const {allUser,setAllUser} =useContext(globalVal);

  const [crendential,setCrendential]=useState({
    username:"",
    password:"",
    email:""
  });

  let handleChange=(e)=>{
       let {value,name}=e.target
       setCrendential({...crendential,[name]:value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault();
    const user = allUser.find((ele,index)=>(
      ele.username==crendential.username  && ele.password==crendential.password  
    ))
    if(user !=undefined){
      toast.success("User login successfully")
      setTimeout(() => {
        navigate("/home" ,{state:user})
        
      }, 1000);
     
    }
    else{
      toast.error("Invalid Crendentials")
    }
    

  }
  console.log(crendential)
  return (
    <section className='login'>
    <form action="" onSubmit={handleSubmit}>
    <h1>Login</h1>
    <div className="name">
      <FaUser />
      <input type="text" placeholder="Enter your username" name='username'  onChange={handleChange}/>
    </div>
    <div className="name">
      <MdEmail />
      <input type="email" placeholder="Enter your email" name='email' onChange={handleChange}/>
    </div>
    <div className="name">
      <RiLockPasswordFill />
      <input type="password" placeholder="Enter your password" name='password'  onChange={handleChange}/>
      <BiHide />
    </div>
    <button className="b1">Login</button>
    <p>Don't have an Account?<Link to={"/signup"}>Signup</Link></p>
  </form>
    </section>
  )
}

export default Login