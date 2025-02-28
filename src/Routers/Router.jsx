import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";
import Brand from "../Pages/Brand";
import Contacts from "../Pages/Contacts";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import CarsPage from "../Pages/CarsPage";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cars",
        element: <CarsPage />
      },
      {
        path: "/brand",
        element: <Brand />
      },
      {
        path: "/service",
        element: <Services />
      },
      {
        path: "/service",
        element: <Services />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
        {
          path: "/blog/singleblog",
          element: <SingleBlog />
        }
        ]
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

export default Router;