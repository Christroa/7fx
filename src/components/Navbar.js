import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [bars, setBars] = useState(true);
  const navShow = () => {
    const hamburger = document.querySelector(".hamburger");
    const navUL = document.querySelector("ul");

    navUL.classList.toggle("show");
  };
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav>
          <ul className="cc">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Investment</a>
            </li>
            <li>
              <a href="/">Education</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Marketrs</a>
            </li>
          </ul>
          <div className="LSup">
            <button className="sign">Sign Up</button>
            <button className="log">Login In</button>
          </div>
        </nav>
        <span className="hamburger" onClick={navShow}>
          <FaBars color="#fff" size={"2rem"} />
        </span>
      </header>
    </>
  );
};

export default Navbar;
