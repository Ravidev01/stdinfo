import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../constants/URL";
import "../dataAdd/dataadd.css";

const DataAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [age, setAge] = useState();
  const [contactNo, setContactNo] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(params.get("id"));
  // const handleSubmit =()=>{

  //   console.log(firstName);
  //   console.log(lastName);
  // }

  const postData = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`${API_URL}/${id}`, {
        firstName,
        lastName,
        emailId,
        age,
        contactNo,
        bloodGroup
      });
      navigate("/home");
    } else {
      await axios.post(API_URL, {
        firstName,
        lastName,
        emailId,
        age,
        contactNo,
        bloodGroup
      });
    }
    setFirstName("");
    setLastName("");
    console.log(firstName);
    navigate("/home");
  };

  useEffect(() => {
    const getData = async () => {
      if (id) {
        // event.target.reset();
        const data = await axios.get(`${API_URL}/${id}`);
        console.log(data.data);
        setFirstName(data.data.firstName);
        setLastName(data.data.lastName);
        setEmailId(data.data.emailId);
        setAge(data.data.age);
        setContactNo(data.data.contactNo);
        setBloodGroup(data.data.bloodGroup)
      }
    };
    getData();
  }, []);

  return (
    <div className="container" style={{ marginTop: "10px", width: "50%" }}>
      <form onSubmit={postData}>
        <h4 style={{ textAlign: "center" }}>{id?"UPDATE STUDENT INFORMATION":"CREATE NEW STUDENT"}</h4>
        <div className="row">
          <div className="col">
            <input
              required
              value={firstName}
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              value={lastName}
              required
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              value={emailId}
              required
              type="email"
              onChange={(e) => setEmailId(e.target.value)}
              class="form-control"
              placeholder="Email Id"
              aria-label="Email Id"
            />
          </div>
          <div className="col">
            <input
              value={age}
              required
              type="number"
              onChange={(e) => setAge(e.target.value)}
              class="form-control"
              placeholder="Age"
              aria-label="Age"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              value={contactNo}
              required
              type="tel"
              onChange={(e) => setContactNo(e.target.value)}
              class="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />
          </div>
          <div className="col">
            <input
              value={bloodGroup}
              required
              type="text"
              onChange={(e) => setBloodGroup(e.target.value)}
              class="form-control"
              placeholder="BloodGroup"
              aria-label="BloodGroup"
            />
          </div>
        </div>

        <div className="d-grid gap-2 mt-3 p-100">
          <button type="submit" className="btn btn-primary">
            {id ? "Update" : "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataAdd;
