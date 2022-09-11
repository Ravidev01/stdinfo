import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../constants/URL";
import "../home/home.css";

const Home = () => {
  const [apiData, setapiData] = useState([{}]);
  const navigate = useNavigate();

  const callGetAPL = async () => {
    const response = await axios.get(API_URL);
    setapiData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    callGetAPL();
  }, []);

  const handleDelete = async (id) => {
    const test = apiData.filter((a) => a.id !== id);
    await axios.delete(`${API_URL}/${id}`);

    setapiData(test);
  };

  const handleUpdate =(id)=>{

    navigate(`/dataadd?id=${id}`)

  }

  return (
    <div className="tableCard">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data, i) => {
            return (
              <tr key={data.id}>
                <th scope="row">{i + 1}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>test@gmail.com</td>
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
                    style={{cursor: "pointer" }}
                  >
                    <EditOutlinedIcon />
                  </i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
