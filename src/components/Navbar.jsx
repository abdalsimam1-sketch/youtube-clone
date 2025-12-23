import React from "react";
import Logo from "../assets/react.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar d-flex justify-content-between p-2 ">
        <div className=" d-flex align-items-center ">
          <i className="bi bi-list fs-3 btn"></i>
          <img src={Logo} alt="" />
        </div>
        <div className="search col-9 col-md-6 col-lg-6 d-flex align-items-center p-1">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search"
            style={{ border: "none" }}
            className=" form-control flex-grow-1 px-2"
          />
          <i className="bi bi-search btn btn-outline-dark ms-auto"></i>
        </div>
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-mic btn btn-outline-dark "></i>
          <i className="bi bi-plus-lg text-capitalize btn btn-outline-dark">
            {" "}
            Create
          </i>

          <i className="bi bi-bell btn btn-outline-dark"></i>
          <i className="bi bi-moon-fill btn btn-outline-dark"></i>
        </div>
      </nav>
    </>
  );
};
