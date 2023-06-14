import React from "react";
import "./Auth.scss";
import Logo from "../../assets/images/logo.png";
import Authbg from "../../assets/images/auth/auth_bg.svg";
import GoogleIcon from "../../assets/images/auth/google.png";
import MicrosoftIcon from "../../assets/images/auth/microsoft.png";

const Auth = () => {

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
                <div className="auth-btn">
                    <button>
                        <img src={GoogleIcon} alt="google" />
                        Log In with Google
                    </button>
                    <button>
                        <img src={MicrosoftIcon} alt="microsoft" />
                        Log In with Microsoft
                    </button>
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
                <button>
                    <img src={MicrosoftIcon} alt="microsoft" />
                    Sign Up with Microsoft
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
