import React from 'react'
import '../login/login.css'
import "bootstrap/dist/css/bootstrap.min.css"
import{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Login = () => {

        const [email, setemail] = useState('');
        const [password, setpassword] = useState();
        const navigate =useNavigate()

        const [upEmail, setupEmail] = useState('');
        const [upPassword, setupPassword] = useState();
        const [upUserName, setUpuserName] = useState();
        let [authMode, setAuthMode] = useState("signin")

        const handleSubmit =(e)=>{
            e.preventDefault()
            console.log(email);
            console.log(password);

            navigate('/home')
        }

        const upHandleSubmit =(e)=>{
            e.preventDefault()
            setAuthMode(authMode === "signin" ? "signup" : "signin")
        }
        const changeAuthMode = () => {
          setAuthMode(authMode === "signin" ? "signup" : "signin")
        }
      
        if (authMode === "signin") {
          return (
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" style={{cursor: 'pointer'}} onClick={changeAuthMode}>
                      Sign Up
                    </span>
                  </div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        value={email}
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      value={password}
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <p className="text-center mt-2">
                    Forgot <a href="#">password?</a>
                  </p>
                </div>
              </form>
            </div>
          )
        }
      
        return (
          <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div className="text-center">
                  Already registered?{" "}
                  <span className="link-primary" style={{cursor: 'pointer'}} onClick={changeAuthMode}>
                    Sign In
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Full Name</label>
                  <input
                    value={upUserName}
                    type="email"
                    className="form-control mt-1"
                    placeholder="e.g Jane Doe"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    value={upEmail}
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    value={upPassword}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button onClick={upHandleSubmit} type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="text-center mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </form>
          </div>
        )
}

export default Login