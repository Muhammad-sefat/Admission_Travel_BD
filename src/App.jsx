import { Outlet } from "react-router";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
