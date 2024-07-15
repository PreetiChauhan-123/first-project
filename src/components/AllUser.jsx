import React, { useContext, useEffect, useRef, useState } from "react";
import { globalVal } from "../GlobalContext/ContextApi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllUser = () => {
  let { allUser, setAllUser, alldept, setAllDept,deletecount,setDeleteCount } = useContext(globalVal);

  const [filterData,setFilterData]=useState("");
  let SearchRef = useRef();
  let selectRef = useRef();
  


  let navigate = useNavigate();

  let deleteUser=async(id)=>{
    await axios.delete(`http://localhost:5000/employees/${id}`);
    setDeleteCount(id);
    toast.success(`User ${id} is deleted`)

  
  }
  let fetchEmployees= async ()=>{
    let {data} = await axios.get("http://localhost:5000/employees")
    setAllUser(data);
}
let handleSearch=()=>{
            let data = SearchRef.current.value;
            let filterKey = selectRef.current.value;
            console.log(filterKey,data)

            let filterdata = allUser.filter((ele,index)=>{
              return ele[`${filterKey}`]== data;
            })
            setFilterData(filterdata);
}
useEffect(()=>{
  fetchEmployees();

},[])
  return (
    <section className="alluser">
      <div className="userone">
        <div className="aone">
        {filterData.length>0 &&  <div className="aone1" onClick={()=>{setFilterData("")}}>Home</div>}
         
        </div>
        <div className="bone">
        <select name="" id="" ref={selectRef}>
        <option value="NA" disabled selected>Search by </option>
        {allUser.length !=0 &&  Object.keys(allUser[0]).map((ele,ind)=>{
          return <option value={ele}>{ele}</option>
        })}
        </select>
          <div className="bone1">
           <input type="text" ref={SearchRef}  placeholder="Search here"/>
          </div>
          <button className="bone2" onClick={ handleSearch}>Search</button>
        </div>
      </div>
      <div className="table">
        <table>
          <tr >
           <thead>
           <th>ENAME</th>
           <th>EMPNO</th>
           <th>JOB</th>
           <th>MGR</th>
           <th>HIREDATE</th>
           <th>SAL</th>
           <th>COMM</th>
           <th>DEPTNO</th>
           <th>UPDATE</th>
           <th>DELETE</th>
           </thead>
          
         
          {(filterData || allUser).map((ele, index) => {
            return (
              <tbody>
              <tr >
                <td>{ele.ENAME}</td>
                <td>{ele.EMPNO}</td>
                <td>{ele.JOB}</td>
                <td>{ele.MGR || "NA"}</td>
                <td>{ele.HIREDATE}</td>
                <td>{ele.SAL}</td>
                <td>{ele.COMM || "NA"}</td>
                <td>{ele.DEPTNO}</td>
                <td><button className="update" onClick={()=>{navigate("/home/updateUser",{state:ele})}}>UPDATE</button></td>
                <td><button className="delete" onClick={()=>{deleteUser(ele.id)}}>DELETE</button></td>
              </tr>
              </tbody>

              
            );
          })}
          </tr>
        </table>
      </div>
    </section>
  );
};

export default AllUser;
