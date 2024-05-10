import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        navigate("/");
      }
    },1000); // Run every second
  
    // Clear the timer when the component unmounts or when time changes
    return () => clearTimeout(timer);
  }, [time, navigate]);
  

  return (
    <>
      <div className="flex justify-center align-middle items-center mt-32">
        <img src="/Frame.png" className="absolute -mt-40 " alt="" />
        <div className="absolute">
          <h1 className="covered-by-your-grace-regular ms-10 text-xl text-green-500">
            Success Submitted
          </h1>
          <h1 className="manrope text-3xl">Congratulations</h1>
        </div>
        <div className="flex justify-center align-middle items-center mt-40">
          <span>
            <h1 className="text-xs text-gray-500">
              Your request has been successfully submitted to us. We
            </h1>
            <h1 className="text-xs text-gray-500">
              will validate your information and reach out to you
            </h1>
            <h1 className="text-xs text-gray-500 ms-24">
              {" "}
              shortly with updates
            </h1>
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-52">
        <h1 className="text-xs text-gray-500">
          Redirecting you to Homepage in{" "}
          <strong className="text-black">{time} seconds</strong>
        </h1>
      </div>
    </>
  );
};
