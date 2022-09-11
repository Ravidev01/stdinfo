import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../constants/URL";

const DataAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      });
      navigate("/home");

    } else {
      await axios.post(API_URL, {
        firstName,
        lastName,
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
        const data = await axios.get(`${API_URL}/${id}`);
        console.log(data.data);
        setFirstName(data.data.firstName);
        setLastName(data.data.lastName);
      }
    };
    getData();
  }, []);

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
            {id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataAdd;
