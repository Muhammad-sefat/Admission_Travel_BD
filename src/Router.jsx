import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PreviousTravelImages from "./pages/PreviousTravelImages";
import Contact from "./pages/Contact";
import Conditions from "./pages/Conditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pretravelimages",
        element: <PreviousTravelImages />,
      },
      {
        path: "/conditions",
        element: <Conditions />,
      },
    ],
  },
]);

export default router;
