import React from "react";
import logo_yard_sale from "../assets/logos/logo_yard_sale.svg";
import email from "../assets/icons/email.svg";
import "../Styles/SendEmail.scss";
import { Link } from "react-router-dom";

export const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <button className="primary-button login-button">
          <Link to={"/login"} className="btn-login-link">
            Login
          </Link>
        </button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
