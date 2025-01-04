import React from "react";
import image from "../assets/admission.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Previous Travel Images</a>
            </li>
            <li>
              <a>Conditions</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <img src={image} alt="Logo" />
          <button className="flex items-center gap-2 text-xl">
            {" "}
            <FontAwesomeIcon icon={faSquareFacebook} />
            Facebook
          </button>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-base font-medium menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Previous Travel Images</a>
            </li>
            <li>
              <a>Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
