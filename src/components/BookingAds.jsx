import React from "react";
import banner from "../assets/about.png";

const BookingAds = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col items-start lg:flex-row gap-8">
        <div>
          <p className="py-6 text-4xl font-bold text-left">
            ঘরে বসেই খুব সহজেই আপনার পছন্দের আসনটি বুকিং করে ফেলুন....
          </p>
        </div>
        <div className="rounded-lg">
          <img
            src={banner}
            alt="Banner"
            className="rounded-lg max-w-xl"
            style={{ display: "block", backgroundColor: "inherit" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingAds;
