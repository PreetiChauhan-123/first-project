import React, { createContext, useState } from 'react'
import { v1 as uuid} from "uuid";


export const globalVal=createContext();

const ContextApi = ({children}) => {
    let {Provider}=globalVal;
    const[allUser,setAllUser] = useState([]);
    const[alldept,setAllDept] = useState([]);
    const[deletecount,setDeleteCount]=useState("");
    const[userDetails,setUserDetails]=useState({
      username:"",
      password:"",
      email: "",
      ENAME:"",
      EMPNO: 0,
      JOB:"",
      MGR: "",
      HIREDATE:"",
      SAL: "",
      COMM: "",
      DEPTNO:"" ,
      id:uuid().slice(uuid().length-4),
    });

console.log(allUser)
console.log(alldept)
  return (
    <Provider value={{allUser,setAllUser,alldept,setAllDept,deletecount,setDeleteCount,userDetails,setUserDetails}}>{children}</Provider>
  )
}

export default ContextApi