import React from "react";
import condition1 from "../assets/condition.png";
import condition2 from "../assets/condition2.png";

const Conditions = () => {
  return (
    <div className="flex justify-between items-center bg-[#e0eed5] my-8 w-full">
      <img src={condition1} alt="image" className="w-[50%]" />
      <img src={condition2} alt="image" className="w-[50%]" />
    </div>
  );
};

export default Conditions;
