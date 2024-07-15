import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { globalVal } from "../GlobalContext/ContextApi";
import axios from "axios";
import toast from "react-hot-toast";

const CreateUser = () => {
   const{userDetails,setUserDetails,allUser,alldept}=useContext(globalVal)
   let navigate = useNavigate();

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
   }=userDetails;


  let handleChange=(e)=>{
    let {value,name}=e.target;
    setUserDetails({...userDetails,[name]:value})
  } 
  console.log(setUserDetails)

  let handleSubmit = async(e)=>{
    e.preventDefault();

    let response = await axios.post("http://localhost:5000/employees",userDetails);
    console.log(response)
    if (response.status==201) {
      toast.success("User created successfully")
      navigate("/home")
    }
    else{
      toast.error("Something went wrong")
    }

  }
 
  return (
    <section className="createuser">
      <p>Create a New Account</p>

      <form action="" onSubmit={handleSubmit}>
        <div className="one">
          <label htmlFor="">USERNAME : </label>
          <input type="text" placeholder=" Enter your name" onChange={handleChange} name="username"/>
        </div>
        <div className="one">
          <label htmlFor="">NAME : </label>
          <input type="text" placeholder=" Enter your name" onChange={handleChange} name="ENAME" />
        </div>
        <div className="one">
          <label htmlFor="">PASSWORD : </label>
          <input type="password" placeholder="Enter password" onChange={handleChange} name="password" />
        </div>
        <div className="one">
          <label htmlFor="">EMAIL : </label>
          <input type="email" placeholder=" Enter your email"  onChange={handleChange} name="email"/>
        </div>
        <div className="two">
          <div className="one">
            <label htmlFor="">EMP NO : </label>
            <input type="number" placeholder=" Enter your empno" onChange={handleChange} name="EMPNO" />
          </div>
          <div className="one">
            <label htmlFor="">DESIGNATION : </label>
            <input type="text" placeholder=" Enter your designation" onChange={handleChange} name="JOB" />
          </div>
        </div>
        <div className="two">
          <div className="one">
            <label htmlFor="">MGR NO : </label>
            <select name="MGR" id="" onChange={handleChange}>
              <option value="">Select Manager</option>
              {allUser.map((ele,ind)=>{
                return <option key={ind+1}>{ele.MGR || "NA"}</option>
              })}
            </select>
          </div>
          <div className="one">
            <label htmlFor="">DEPARTMENT : </label>
            <select name="DEPTNO" id="" onChange={handleChange}>
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
            <input type="number" placeholder=" Enter your salary" onChange={handleChange} name="SAL" />
          </div>
          <div className="one">
            <label htmlFor="">COMMISSION : </label>
            <input type="number" placeholder=" Enter your commmission" onChange={handleChange} name="COMM"/>
          </div>
        </div>
        <div className="one">
          <label htmlFor="">HIREDATE : </label>
          <input type="date" placeholder=" Enter your hiredate" onChange={handleChange} name="HIREDATE" />
        </div>

        <button>
        Create User
        </button>
      </form>
    </section>
  );
};

export default CreateUser;
