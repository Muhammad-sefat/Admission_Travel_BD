import "./App.css";
import Banner from "./components/Banner";
import BookingAds from "./components/BookingAds";
import BusSitPlan from "./components/BusSitPlan";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BookingAds />
      <BusSitPlan />
      <Footer />
    </>
  );
}

export default App;
