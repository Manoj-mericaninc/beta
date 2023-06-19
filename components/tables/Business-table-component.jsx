"use client";
import React, {  useContext, useState } from "react";
import { Developers } from "./businesstabledata";
// import { TiArrowUnsorted } from "react-icons/ti";
import { GrEdit } from "react-icons/gr";
// import {FaSortUp, FaSortDown} from "react-icons/fa"
import { TableContext } from "@context/tablecontext";

const BusinessTable = () => {

  const Context = useContext(TableContext)
  const [user,setUser]= useState(Developers)
  // const [userName, setUserName] = useState(Developers)
  const [search, setSearch] = useState("");
  const [status,setStatus] = useState('');
  const [category,setCategory]=useState('')
  const [sorted,setSorted] = useState({sorted:"id" , reversed: false});
  const [sortedName, SetSortedName] = useState({sortedName:"name" , reversed: false})
 

  const sortByName = ()=>{
    setSorted({sorted:"id" , reversed:!sorted.reversed});
    const usersCopyName = [...user];
    usersCopyName.sort((a, b)=>{
      if(sorted.reversed){
        if (a["Business Name"]>b["Business Name"]) {
          return 1
        } else if(a["Business Name"]<b["Business Name"]){
          return -1
        }return 0
      }  
      if (a["Business Name"]>b["Business Name"]) {
        return -1
      } else if(a["Business Name"]<b["Business Name"]){
        return 1
      }return 0
    }
    )
    setUser(usersCopyName)
  }

  const sortById = ()=>{
    setSorted({sorted:"id" , reversed:!sorted.reversed});
    const usersCopy = [...user];
    usersCopy.sort((userA,userB)=>{
      if(sorted.reversed){
        return userA["Client Id"] - userB["Client Id"]
      }
      return userB["Client Id"] - userA["Client Id"]
    });
    setUser(usersCopy);
  }




  // const renderArrow = ()=>{
  //   if(sorted.reversed){
  //     return <FaSortUp />
  //   }
  //   return <FaSortDown />
  // }

  return (
    <>
      <div className=" p-7 flex gap-4">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full max-w-xs focus:outline-cyan-500"
          />
        </div>
        <div>
          <label htmlFor="Status" className="flex items-center gap-5">
            Status
            <select
              className="select select-bordered focus:outline-cyan-500"
              id="status"
              value={status}
              onChange={(e) => {
                const UseStatus = e.target.value;
                setStatus(UseStatus);
              }}
            >
              <option value="all">All</option>
              <option value="Active ">Active</option>
              <option value="user">DeActive</option>
            </select>
          </label>
        </div>
        {/* <select name="" id=""></select> */}
        <div>
          <label htmlFor="Category" className="flex items-center gap-5 ">
            Category
            <select
              className="select select-bordered focus:outline-cyan-500"
              id="Category"
              value={category}
              onChange={(e) => {
                const UseCategorys = e.target.value;
                setCategory(UseCategorys);
                console.log(UseCategorys);
              }}
            >
              <option value="all">All</option>
              <option value="Knowledge Work System">
                Knowledge Work System
              </option>
              <option value="Management Information System">
                Management Information System
              </option>
              <option value="Decision Support System">
                Decision Support System
              </option>
              <option value="Office Automation System">
                Office Automation System
              </option>
              <option value="Transaction Processing System">
                Transaction Processing System
              </option>
              <option value="Executive Support Team">
                Executive Support Team
              </option>
            </select>
          </label>
        </div>
        <div>
          <button
            className="btn btn-success text-white"
            onClick={() => {
              Developers.filter((item)=>{
                search.toLowerCase()===setCategory() && setStatus
                ?item
                :item.Status,item.Category.toLowerCase()
              })
            }
              
            }
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="btn text-cyan-500"
            onClick={() => setStatus("") || setCategory("")}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="overflow-x-auto flex justify-center items-center">
        <table className="max-w-md table border-2 ">
          <thead className="text-center text-sm rounded-xl text-blue-400 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="flex" onClick={sortByName}>
                <span>Business Name</span>
              </th>
              <th onClick={sortById}>
                <span>Client ID</span>
                {/* {sorted.sorted === "Client ID" ? renderArrow() : null} */}
                
              </th>
              <th onClick={sortByName}>
                <span>Email</span>
              </th>
              <th onClick={sortById}>
                <span>Contact Number</span>
              </th>
              <th onClick={sortByName}>
                <span>Net Terms</span>
              </th>
              <th onClick={sortByName}>
                <span>Termination Name</span>
              </th>
              <th onClick={sortByName}>
                <span>Status</span>
              </th>
              <th onClick={sortByName}>
                <span>Category</span>
              </th>
              <th>Additional Info</th>
              <th onClick={sortByName}>
                <span>Active placements</span>
              </th>
              <th onClick={sortByName}>
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {user
              .filter((i) => {
                return search.toLowerCase() === ""
                  ? i
                  : i["Business Name"],i["Contact Number"].toLowerCase().includes(search);
              })
              .map((i, o) => {
                return (
                  <tr key={o} className="hover">
                    <td>{i["Business Name"]}</td>
                    <td>{i["Client Id"]}</td>
                    <td>{i.Email}</td>
                    <td>{i["Contact Number"]}</td>
                    <td>{i["Net Terms"]}</td>
                    <td>{i["Termination Name"]}</td>
                    <td>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {i.Status}
                      </span>
                    </td>
                    <td>{i.Category}</td>
                    <td>{i["Additional Info"]}</td>
                    <td>
                      <span
                        className="tooltip tooltip-left tooltip-primary text-2xl text-cyan-400"
                        data-tip="19"
                      >
                        {i["Active placements"]}
                      </span>
                    </td>
                    <td>
                      <span className="text-2xl flex justify-between items-center">
                        {i.Actions}
                        <GrEdit className="text-xl" />
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BusinessTable;



