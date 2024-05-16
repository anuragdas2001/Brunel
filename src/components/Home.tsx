import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const handleExploreMore = () => {
    navigate("/exploremore");
  };
  return (
    <>
      <div className="flex justify-center items-center mt-10 ">
        <h1 className="covered-by-your-grace-regular text-2xl text-green-400">
          Success Stories
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl manrope">
          Every success journey <br /> we've encountered.
        </h1>
      </div>
      <div className="float-end mr-48 mt-20 font-extrabold  manrope">
        <h1 className="text-xl">
          Enhance fortune 50 <br /> company's insights <br /> teams research{" "}
          <br /> capabilities
        </h1>
        <div className="flex gap-1 mt-8">
          <img src="/Ellipse 10742.png" alt="" />
          <img src="/Ellipse 10743.png" alt="" />
          <img src="/Ellipse 10743.png" alt="" />
        </div>
        <div className="mt-14">
          <button
            className="bg-black rounded-full text-white p-4 w-44 flex items-center justify-center"
            onClick={handleExploreMore}
          >
            Explore More
            <img src="/Frame (1).png" alt="" className="ml-2" />
          </button>
        </div>
      </div>
      <div className="w-full ml-0">
        <div className="ml-10">
          <img
            className=" h-72 w-72  rounded-3xl  flex justify-center items-center ml-20 mt-10"
            src="/image 32618.png"
            alt=""
          />
        </div>

        <div className="ml-10">
          <img
            className="absolute  h-20 w-40 -mt-20 ml-7 float-left"
            src="/Frame 1261155429.png"
            alt=""
          />
          <img
            className="h-40  w-48 absolute -mt-56 float-left -ml-8"
            src="/Frame 1261155509.png"
            alt=""
          />
          <img
            className="absolute h-48 w-60 -mt-24 float-right ml-52"
            src="/Frame 1261155512.png"
            alt=""
          />
        </div>
      </div>

      <div className="">
        <div className=" absolute h-[800px] w-11/12 ml-10 p-10  mt-32 bg-[#E8EEE7] rounded-3xl">
          <h1 className="covered-by-your-grace-regular text-2xl m-10 ms-10 text-gray-400">
            What's on your mind
          </h1>
          <h1 className="ms-10 manrope -mt-10  text-3xl">Ask Questions</h1>
          <div className="float-right text-xs manrope -mt-14">
            <div className=" mt-2">
              <span className="">Do you offer freelancers? </span>
              <span className="float-end">+</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="mt-2">
              <span className="">
                Whats the guarantee that I will be satisfied <br /> with the
                hired talent?{" "}
              </span>
              <span className="float-end">+</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="mt-2">
              <span className="">Can I hire multiple talents at once? </span>
              <span className="float-end">-</span>
              <br />
              <span className="text-gray-500 font-[400]">
                if unhappy with a project communicate with the freelancer, allow
                for revisions,and <br /> refer to the agreement.Escalate to
                platform support if needed,considering <br /> mediation. Review
                policies, seek collaborative solutions for resolution
              </span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="mt-2">
              <span className="">
                Why should I not go to an agency directly?
              </span>
              <span className="float-end">+</span>
            </div>
            <hr className="border-t border-gray-500 my-4" />
            <div className="mt-2">
              <span className="">
                Who can help me pick a right skillset <br /> and duration for me{" "}
              </span>
              <span className="float-end">+</span>
            </div>
          </div>
          <img className="absolute ml-10 mt-10" src="Union.png" alt="" />
          <br />
          <div className="absolute mt-96 h-32 w-full -ml-10 ">
            <footer className="bg-[#F5F5F5] rounded-xl text-white text-center py-4 bottom-0">
              <p className="text-black text-start mx-5 m-3 ">
                © Talup 2023. All rights reserved
              </p>

              <a className="text-black float-end  mx-3 -mt-10" href="">
                Privacy Policy
              </a>
              <a className="text-black float-end mx-40 -mt-10" href="">
                Terms & Conditions
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
