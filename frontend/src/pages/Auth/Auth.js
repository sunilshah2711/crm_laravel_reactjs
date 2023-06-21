import React from "react";
import { useState, useCallback } from "react";
import "./Auth.scss";
import Logo from "../../assets/images/logo.png";
import Authbg from "../../assets/images/auth/auth_bg.svg";
import GoogleIcon from "../../assets/images/auth/google.png";
// import MicrosoftIcon from "../../assets/images/auth/microsoft.png";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Auth = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [iseoor, setError] = useState(false);
  const [eoorMessage, setErrorMessage] = useState("");

  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      // "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
  });

  const formSubmit = useCallback(async () => {
    instance
      .post("/login", {
        email: FormData.email,
        password: FormData.password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          if (
            signIn({
              token: response.data.token,
              expiresIn: 10080,
              tokenType: "Bearer",
              authState: response.data.user,
            })
          ) {
            navigate("/contact");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  }, [FormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="auth-main">
        <div className="auth-bg">
          <img src={Authbg} alt="authbg" />
        </div>
        <div className="w-100 d-flex justify-content-center">
          <img src={Logo} alt="log" />
        </div>
        <div className="auth-wrap">
          <div className="auth-login">
            <div className="auth-heding">
              <h3>Log In</h3>
            </div>
            {eoorMessage && <Alert variant="danger">{eoorMessage}</Alert>}

            <div className="auth-btn">
              <form>
                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}
              </form>
              <button onClick={formSubmit}>
                {/* <img src={GoogleIcon} alt="google" /> */}
                Log In
              </button>
              {/* <button>
                        <img src={MicrosoftIcon} alt="microsoft" />
                        Log In with Microsoft
                    </button> */}
            </div>
          </div>
          <div className="auth-login">
            <div className="auth-heding">
              <h3>Sign Up</h3>
            </div>
            <div className="auth-btn">
              <button>
                <img src={GoogleIcon} alt="google" />
                Sign Up with Google
              </button>
              {/* <button>
                    <img src={MicrosoftIcon} alt="microsoft" />
                    Sign Up with Microsoft
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
