import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../constants/URL";

const DataAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate()

  // const handleSubmit =()=>{

  //   console.log(firstName);
  //   console.log(lastName);
  // }

  const postData = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, {
      firstName,
      lastName,
    });
    setFirstName("");
    setLastName("")
    console.log(firstName);
    navigate('/home')
  };

  return (
    <div className="container" style={{ marginTop: "10px", width: "50%" }}>
      <form onSubmit={postData}>
        <h4 style={{ textAlign: "center" }}>STUDENT INFORMATION</h4>
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
        <div className="d-grid gap-2 mt-3 p-100">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataAdd;
