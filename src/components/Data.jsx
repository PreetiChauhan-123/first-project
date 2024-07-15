import React, { useContext, useEffect } from 'react'
import { globalVal } from '../GlobalContext/ContextApi'
import axios from 'axios';

const Data = () => {
    const {allUser,setAllUser,alldept,setAllDept,deletecount} = useContext(globalVal);
  


    let fetchEmployees= async ()=>{
        let {data} = await axios.get("http://localhost:5000/employees")
        setAllUser(data);
    }

    let fetchDept= async ()=>{
        let {data} = await axios.get("http://localhost:5000/department")
        setAllDept(data);
    }

    useEffect(()=>{
        fetchEmployees();
        fetchDept();
    },[deletecount]);
}

export default Data