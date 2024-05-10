import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Registration } from "./components/Registration";
import { Success } from "./components/Success";
import { Explore } from "./components/Explore";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/exploremore",
        element:<Explore/>
      },
      {
        path: "/registration",
        // element: <Registration />,
        children: [
          {
            path: "/registration",
            element: <Registration />,
          },
          {
            path: "/registration/success",
            element: <Success />,
          },
        ],
      },
    ],
  },
]);
