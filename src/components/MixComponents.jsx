import React from "react";
import bkash from "../assets/bkash.jpg";
import line from "../assets/line.png";
import aircon from "../assets/aircon.png";
import transport from "../assets/transport.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faChair,
  faMoneyCheckDollar,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

const MixComponents = () => {
  return (
    <div className="mb-5">
      <img src={bkash} alt="logo" />
      <div className="bg-gray-600 max-w-full flex justify-between gap-5 items-center text-white p-12 my-4 rounded">
        <div className="flex border p-5 gap-3 text-left rounded">
          <FontAwesomeIcon icon={faBus} className="text-xl text-lime-600" />
          <div>
            <p className="text-xl">পরিবহন</p>
            <p>এসি/নন এসি বাস</p>
          </div>
        </div>
        <div className="flex border p-5 gap-3 text-left rounded">
          <FontAwesomeIcon icon={faChair} className="text-xl text-lime-600" />
          <div>
            <p className="text-xl">আসন</p>
            <p>আরামদায়ক চেয়ারকোচ</p>
          </div>
        </div>
        <div className="flex border p-5 gap-3 text-left rounded">
          <FontAwesomeIcon
            icon={faMoneyCheckDollar}
            className="text-xl text-lime-600"
          />
          <div>
            <p className="text-xl">বুকিং প্রক্রিয়া</p>
            <p>অনলাইন অফলাইন</p>
          </div>
        </div>
        <div className="flex border p-5 gap-3 text-left rounded">
          <FontAwesomeIcon
            icon={faShieldHeart}
            className="text-xl text-lime-600"
          />
          <div>
            <p className="text-xl">নিরাপত্তা</p>
            <p>অভিজ্ঞ গাইড সকল যাত্রায়</p>
          </div>
        </div>
      </div>
      <div className="bg-[#EDFBE2] max-w-full p-8 rounded-sm flex items-center justify-between gap-5">
        <p className="text-lg font-semibold">পরিবহন পার্টনার :</p>
        <img className="text-lg" src={line} alt="" />
        <img className="text-lg" src={aircon} alt="" />
        <img className="text-lg" src={transport} alt="" />
        <img className="text-lg" src={line} alt="" />
      </div>
    </div>
  );
};

export default MixComponents;
