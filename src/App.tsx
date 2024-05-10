import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
 const App = () => {
  return <>

    <RouterProvider router={router}/>
  </>;
};

export default App;

