import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjects = () => {
    console.log("HandleProjects");
    navigate("/registration");
    // setShowCloseButton(true);
  };

  return (
    <>
      <div className="h-20 w-11/12 ml-12  rounded-full p-2 border-2 border-gray-300   mt-2">
        <div className=" float-left  ms-3">
          <img
            className=" m-0 h-14 w-32 p-1"
            src="/Frame 1261155216.png"
            alt=""
          />
        </div>
        <div className="float-right m-0">
          {location.pathname === "/" && (
            <>
              <button
                className="rounded-full text-xs w-36 m-2 border-2  p-3"
                onClick={handleProjects}
              >
                Get Projects
              </button>
              <button className="rounded-full w-40 text-xs m-2 border-2  me-3 p-3 bg-black text-white">
                Onboard Talent
              </button>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
