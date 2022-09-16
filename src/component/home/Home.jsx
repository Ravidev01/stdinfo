import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { observer} from 'mobx-react'

import {StudentStore1} from "../../store/studentstore";



import { API_URL } from "../../constants/URL";
import "../home/home.css";

const Home = observer(() => {

  const store = StudentStore1;  

  const [apiData, setapiData] = useState([{}]);
  const [filterdValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sortStatus, setSortStatus] = useState(true);
  // let [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();

  const handleSort = () => {
    console.log("hi");
    // const data = [...apiData] ;
    if (sortStatus) {
        let sorted = [...apiData].sort((a, b) => a.firstName > b.firstName?1:-1);
        setapiData(sorted);
        setSortStatus(!sortStatus);
    } else {
        let sorted = [...apiData].sort((a, b) => b.firstName > a.firstName?1:-1);
        setapiData(sorted);
        setSortStatus(!sortStatus);
    }
  }

  // const handleSort =()=>{
  //   const sortedData = [...apiData].sort((a,b)=>{
  //     return a.firstName > b.firstName?1:-1
  //   })
  //   setapiData(sortedData)
  // }

  const callGetAPL = async () => {
    const response = await axios.get(API_URL);
    setapiData(response.data);
    console.log(response.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // const filterdValue = localStorage.getItem("SearchedValue");
    // setFilterValue(filterdValue);
  };
  // console.log(store.searchedValue);
  useEffect(() => {
    callGetAPL();
    setFilterValue(store.searchedValue)
  },[]);

  const handleDelete = async (id) => {
    const test = apiData.filter((a) => a.id !== id);
    await axios.delete(`${API_URL}/${id}`);

    setapiData(test);
  };

  const handleUpdate = (id) => {
    navigate(`/dataadd?id=${id}`);
  };

  return (
    <div className="tableCard">
      {isLoading ? (
        <PropagateLoader
          className="fullview"
          color="#282c34"
          loading={isLoading}
          size={20}
        />
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="th-sm" scope="col">
                {" "}
                #
              </th>
              <th scope="col">
                First <ArrowDropUpIcon onClick={handleSort} />
                {/* <ArrowDropDownIcon /> */}
              </th>
              <th scope="col">Last{filterdValue}</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Blood Group</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {apiData.filter((val)=>{
              if(store.searchedValue === ""){
                return val
              }else if(val.firstName.toLowerCase().includes(store.searchedValue.toLowerCase())){
                return val
              }
            }).map((data, i) => {
                return ( 
                  <tr key={data.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.emailId}</td>
                    <td>{data.age}</td>
                    <td>{data.contactNo}</td>
                    <td>{data.bloodGroup}</td>
                    <td>
                      <i
                        onClick={() => handleDelete(data.id)}
                        className="bi bi-pen"
                        style={{ color: "red", cursor: "pointer" }}
                      >
                        <DeleteForeverOutlinedIcon />
                      </i>
                    </td>

                    <td>
                      <i
                        onClick={() => handleUpdate(data.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <EditOutlinedIcon />
                      </i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
});

export default Home;
