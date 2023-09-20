import Arrow from "../assets/images/icon-arrow-down.svg";
import Logo from "../assets/images/logo.svg";
// import { useState } from "react";

export default function OrangeHeader() {
  // const white_color: string = "#fff";

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <img className="header-logo" src={Logo} alt="logo" />
          <ul className="header-nav-ul">
            <li>
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <button type="button" className="header-btn">
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
        <h1>We are Creative</h1>
        <img
          style={{
            textAlign: "center",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
          src={Arrow}
          alt="Arrow"
        />
      </header>
    </>
  );
}
