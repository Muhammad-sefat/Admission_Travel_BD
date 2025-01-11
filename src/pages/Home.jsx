import React from "react";
import Banner from "../components/Banner";
import BookingAds from "../components/BookingAds";
import BusSitPlan from "../components/BusSitPlan";
import MixComponents from "../components/MixComponents";

const Home = () => {
  return (
    <>
      <Banner />
      <BookingAds />
      <BusSitPlan />
      <MixComponents />
    </>
  );
};

export default Home;
