import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";
import Brand from "../Pages/Brand";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Cards from "../Pages/Cards";
import AboutUs from "../Pages/AboutUs";


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
        element: <Cards/>
      },
      {
        path: "/brand",
        element: <Brand/>
      },
      {
        path: "/service",
        element: <Services/>
      },
      {
        path: "/service",
        element: <Services/>
      },
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