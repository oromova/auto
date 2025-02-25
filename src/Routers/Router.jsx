import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Pages/Error";
import Brand from "../Pages/Brand";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cards from "../Pages/Cards";


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
        path: "/aboutus",
        element: <About/>
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