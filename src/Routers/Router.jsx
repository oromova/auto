import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";
import Cars from "../Pages/Cars";
import Brand from "../Pages/Brand";
import AboutUs from "../Pages/AboutUs";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
// import Services from "../Pages/Service";
import Home from "../Pages/Home";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cars",
        element: <Cars/>
      },
      {
        path: "/brand",
        element: <Brand/>
      },
      // {
      //   path: "/service",
      //   element: <Service/>
      // },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
      {
        path: "/contacts",
        element: <Contacts/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "*",
        element: <Error/>
      },
    ]
  }
]);

export default Router;