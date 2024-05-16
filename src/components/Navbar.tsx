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
      <div className="h-16 w-11/12 ml-12  rounded-full p-1 border-2 border-gray-100 mt-2">
        <div className=" float-left  ms-3">
          <img
            className=" m-0 h-14 w-32 p-2"
            src="/Frame 1261155216.png"
            alt=""
          />
        </div>
        <div className="float-right -mt-1">
          {location.pathname === "/" && (
            <>
              <button
                className="rounded-full text-xs w-32  border-2 h-12 p-1"
                onClick={handleProjects}
              >
                Get Projects
              </button>
              <button className="rounded-full h-12 w-32 text-xs m-2 border-2  me-1 p-2 bg-black text-white">
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
