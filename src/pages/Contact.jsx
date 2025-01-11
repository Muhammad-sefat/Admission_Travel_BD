import React from "react";
import banner from "../assets/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="relative">
      <img src={banner} alt="Image" className="w-full" />
      <div className="border bg-white  -mt-12 mb-16 z-10 shadow-md relative  rounded p-12 mx-8  flex justify-between items-center">
        <div className="border rounded py-8 px-10">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-lime-700 text-xl mb-3"
          />
          <p className="text-lg">+8801687867252</p>
        </div>
        <div className="border rounded py-8 px-10">
          <FontAwesomeIcon
            icon={faEnvelope}
            className=" text-lime-700 text-xl mb-3"
          />
          <p className="text-lg">admissiontravelerbd18@gmail.com</p>
        </div>
        <div className="border rounded py-8 px-10">
          <FontAwesomeIcon
            icon={faLocationDot}
            className=" text-lime-700 text-xl mb-3"
          />
          <p className="text-lg">মিরপুর-২, ঢাকা।</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
