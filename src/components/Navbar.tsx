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
      <div className="border-2 border-white mt-3">
        <div className=" float-left  ms-3">
          <img
            className=" m-0 h-14 w-40 p-1"
            src="/Frame 1261155216.png"
            alt=""
          />
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
          
        </div>
      </div>
      <Outlet />
    </>
  );
};
