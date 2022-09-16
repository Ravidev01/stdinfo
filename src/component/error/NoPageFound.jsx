import React from "react";
import Button from "@mui/material/Button";
import img from "../../assets/images/not-found.webp";
import { useNavigate } from "react-router-dom";

import "../error/noPageFound.css";

function NoPageFound() {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/home");
  };

  return (
    <div className="error">
      <img src={img} />
      <h5>PAGE NOT FOUND</h5>
      <Button onClick={handleChange} variant="contained">
        GO TO HOME
      </Button>
    </div>
  );
}

export default NoPageFound;
