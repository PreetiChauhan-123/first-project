import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { globalVal } from "../GlobalContext/ContextApi";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
   const{userDetails,setUserDetails,allUser,alldept}=useContext(globalVal)
   let navigate = useNavigate();
   let {state} = useLocation()
   let [updateuser ,setUpdateUser] =useState(
    {
      username:state.username,
      password:state.password,
      email:state.email,
      ENAME:state.ENAME,
      EMPNO:state.EMPNO,
      JOB:state.JOB,
      MGR:state.MGR,
      HIREDATE:state.HIREDATE,
      SAL:state.SAL,
      COMM:state.COMM,
      DEPTNO:state.DEPTNO ,
      id:state.id,
    }
   )

   let 
   {
      username,
      password,
      email,
      ENAME,
      EMPNO,
      JOB,
      MGR,
      HIREDATE,
      SAL,
      COMM,
      DEPTNO ,
      id,
   }=updateuser;


  let handleChange=(e)=>{
    let {value,name}=e.target;
    setUpdateUser({...updateuser,[name]:value})
  } 
  console.log(setUpdateUser)

  let handleSubmit = async(e)=>{
    e.preventDefault();

    let response = await axios.put(`http://localhost:5000/employees/${state.id}`,updateuser);
    console.log(response)
    if (response.status==201 || response.status==200) {
      toast.success("User updated successfully")
      navigate("/home")
    }
    else{
      toast.error("Something went wrong")
    }

  }
 
  return (
    <section className="createuser">
      <p>Update An  Account</p>

      <form action="" onSubmit={handleSubmit}>
        <div className="one">
          <label htmlFor="">USERNAME : </label>
          <input type="text" placeholder=" Enter your name" onChange={handleChange} name="username" value={username}/>
        </div>
        <div className="one">
          <label htmlFor="">NAME : </label>
          <input type="text" placeholder=" Enter your name" onChange={handleChange} name="ENAME" value={ENAME}/>
        </div>
        <div className="one">
          <label htmlFor="">PASSWORD : </label>
          <input type="password" placeholder="Enter password" onChange={handleChange} name="password" value={password} />
        </div>
        <div className="one">
          <label htmlFor="">EMAIL : </label>
          <input type="email" placeholder=" Enter your email"  onChange={handleChange} name="email" value={email}/>
        </div>
        <div className="two">
          <div className="one">
            <label htmlFor="">EMP NO : </label>
            <input type="number" placeholder=" Enter your empno" onChange={handleChange} name="EMPNO" value={EMPNO} />
          </div>
          <div className="one">
            <label htmlFor="">DESIGNATION : </label>
            <input type="text" placeholder=" Enter your designation" onChange={handleChange} name="JOB" value={JOB}/>
          </div>
        </div>
        <div className="two">
          <div className="one">
            <label htmlFor="">MGR NO : </label>
            <select name="MGR" id="" onChange={handleChange} value={MGR}>
              <option value="">Select Manager</option>
              {allUser.map((ele,ind)=>{
                return <option key={ind+1}>{ele.MGR || "NA"}</option>
              })}
            </select>
          </div>
          <div className="one">
            <label htmlFor="">DEPARTMENT : </label>
            <select name="DEPTNO" id="" onChange={handleChange} value={DEPTNO}>
              <option value="">Select Department</option>
              {alldept.map((ele,ind)=>{
                return <option key={ind+1}>{ele.DEPTNO || "NA"}</option>
              })}
            </select>
          </div>
        </div>
        <div className="two">
          <div className="one">
            <label htmlFor="">SALARY : </label>
            <input type="number" placeholder=" Enter your salary" onChange={handleChange} name="SAL"  value={SAL}/>
          </div>
          <div className="one">
            <label htmlFor="">COMMISSION : </label>
            <input type="number" placeholder=" Enter your commmission" onChange={handleChange} name="COMM" value={COMM}/>
          </div>
        </div>
        <div className="one">
          <label htmlFor="">HIREDATE : </label>
          <input type="date" placeholder=" Enter your hiredate" onChange={handleChange} name="HIREDATE" value={HIREDATE}/>
        </div>

        <button>
        Update User
        </button>
      </form>
    </section>
  );
};

export default UpdateUser;
