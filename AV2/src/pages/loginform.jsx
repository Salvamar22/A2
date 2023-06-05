import React, { useState } from "react";
import "./loginform.css";
import { BrowserRouter } from 'react-router-dom';
import logo from '../images/logo.png'

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className="page">
             <img src={logo} alt="logo" className="logo custom-logo-size" />

            <div className="loginContainer">
                <div className="cover">
                    <br />
                    <br />
                    <br />
                    <h1>Login</h1>
                    <br />
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />

                    <div className="login-btn" onClick={popup}>Login</div>

                    <p className="text">Or login using</p>
                    <br />
                    <div className="alt-login">
                        <div className="google"></div>
                    </div>

                    <div className={popupStyle}>
                        <h3>Login Failed</h3>
                        <p>Username or password incorrect</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
