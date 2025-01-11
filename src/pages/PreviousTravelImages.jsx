import React from "react";
import bus1 from "../assets/bus1.jpg";
import bus2 from "../assets/bus2.jpg";
import bus3 from "../assets/bus3.jpg";
import bus4 from "../assets/bus4.jpg";
import bus5 from "../assets/bus5.jpg";
import bus6 from "../assets/bus6.jpg";
import bus7 from "../assets/bus7.jpg";
import bus8 from "../assets/bus8.jpg";
import bus9 from "../assets/bus9.jpg";
import bus10 from "../assets/bus10.jpg";
import bus11 from "../assets/bus11.jpg";
import bus12 from "../assets/bus12.jpg";

const PreviousTravelImages = () => {
  return (
    <div className="bg-[#dcf2ca] w-full rounded grid grid-cols-3 gap-5 p-12 my-5">
      <img src={bus1} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus2} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus3} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus4} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus5} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus6} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus7} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus8} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus9} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus10} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus11} alt="image" className="rounded w-[80%] h-full" />
      <img src={bus12} alt="image" className="rounded w-[80%] h-full" />
    </div>
  );
};

export default PreviousTravelImages;
