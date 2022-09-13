import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [filterValue, setFilterValue] = useState('')

  const navigate = useNavigate();


  const searchHandler = (e) => {
          e.preventDefault();
           setFilterValue(e.target.value);
           localStorage.setItem("SearchedValue",e.target.value)
  }
  const handleLogout =()=>{
    navigate("/");
  }


  return (
    <nav class="navbar ">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand" href="/home">
            STDINFO
          </a>
        </div>
        <div className="list">
          <ul>
            <li className="input ">
              <input
              value={filterValue}
              onChange={searchHandler}
                class="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
            <li>
              <Link className="link" to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link className="link" to="dataadd">
                ADD NEW
              </Link>
            </li>
            <li>
              <LogoutIcon style={{color:"red"}} onClick={handleLogout}>logout</LogoutIcon>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
