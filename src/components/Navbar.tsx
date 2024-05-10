import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const [showCloseButton, setShowCloseButton] = useState(false);

  const handleProjects = () => {
    console.log("HandleProjects");
    navigate("/registration");
    // setShowCloseButton(true);
  };

  const handleClose = () => {
    navigate("/");
    // setShowCloseButton(false);
  };

  return (
    <>
      <div className="border-2 border-white mt-3">
        <div className=" float-left  ms-3">
          <img className=" m-0 h-14 w-40 p-1" src="/Frame 1261155216.png" alt="" />
        </div>
        <div className="float-right m-0">
          {location.pathname === "/" && (
            <>
              <button
                className="rounded-full text-xs border-2 me-3 p-4"
                onClick={handleProjects}
              >
                Get Projects
              </button>
              <button className="rounded-full text-xs border-2 ms-3 p-4 bg-black text-white">
                Onboard Talent
              </button>
            </>
          )}
          {/* {location.pathname === "/registration" && showCloseButton && (
            <button
              className="rounded-full text-xs border-2 me-3 p-4"
              onClick={handleClose}
            >
              <img src="/Frame 1261155540.png" alt="" />
            </button>
          )} */}
        </div>
      </div>
      <Outlet />
    </>
  );
};
