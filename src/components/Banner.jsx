import React from "react";
import banner from "../assets/admission-banner.png";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-[#EDFBE2] min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10 p-8">
        <div className="bg-[#EDFBE2] rounded-lg">
          <img
            src={banner}
            alt="Banner"
            className="rounded-lg max-w-xl"
            style={{ display: "block", backgroundColor: "inherit" }}
          />
        </div>
        <div className="text-left mb-10">
          <h2 className="text-2xl font-bold">
            Welcome to <br />
            <span className="text-5xl font-bold"> Admission </span>
            <br /> <span className="text-5xl font-bold">Traveler BD</span>
          </h2>
          <p className="py-6">
            We provide bus service for University admission candidates. Our
            destination for Dhaka University, Jagannath University, Rajshahi
            University, Chittagong University, Jahangirnagar University, CUET,
            KUET, RUET, Krishi Guccho and many more universities.
          </p>
          <Link to={"/about"}>
            <button className="btn btn-primary text-lg">
              <FontAwesomeIcon icon={faAddressCard} />
              More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
