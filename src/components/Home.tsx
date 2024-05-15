import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const handleExploreMore = () => {
    navigate("/exploremore");
  };
  return (
    <>
      <div className="flex justify-center items-center mt-20 ">
        <h1 className="covered-by-your-grace-regular text-green-400">
          Success Stories
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="manrope">
          Every success journey <br /> we have encountered.
        </h1>
      </div>
      <div className="float-end m-44 mt-10 manrope">
        <h1>
          Enhance fortune 50 <br /> company's insights <br /> teams research{" "}
          <br /> capabilities
        </h1>
        <div className="flex gap-1 mt-8">
          <img src="/Ellipse 10742.png" alt="" />
          <img src="/Ellipse 10743.png" alt="" />
          <img src="/Ellipse 10743.png" alt="" />
        </div>
        <div className="mt-10">
          <button
            className="bg-black rounded-full text-white p-2"
            onClick={handleExploreMore}
          >
            Explore More →
          </button>
        </div>
      </div>
      <div className="ml-32">
        <div>
          <img
            className=" h-64 w-64 rounded-3xl flex justify-center items-center ml-20 mt-10"
            src="/image 32618.png"
            alt=""
          />
        </div>

        <div className="">
          <img
            className="absolute h-20 w-40 -mt-20 ml-7 float-left"
            src="/Frame 1261155429.png"
            alt=""
          />
          <img
            className="h-40  w-48 absolute -mt-56 float-left -ml-8"
            src="/Frame 1261155509.png"
            alt=""
          />
          <img
            className="absolute h-48 w-48 -mt-24 float-right ml-52"
            src="/Frame 1261155512.png"
            alt=""
          />
        </div>
      </div>

      <div className="border-2 border-orange-600">
        <div className=" absolute h-[800px] w-100 p-10  mt-32  bg-[#E8EEE7] rounded-3xl">
          <h1 className="covered-by-your-grace-regular text-2xl m-10 ms-10 text-gray-400">
            What's on your mind
          </h1>
          <h1 className="ms-10 manrope -mt-10  text-5xl">Ask Questions</h1>
          <div className="float-right border-2 text-sm manrope -mt-14 border-blue-400">
            <div className=" border-2 mt-2 border-red-500">
              <span className="">Do you offer freelancers? </span>
              <span className="float-end">+</span>
            </div>
            <hr />
            <div className="border-2 mt-2 border-red-500">
              <span className="">
                Whats the guarantee that I will be satisfied <br /> with the
                hired talent?{" "}
              </span>
              <span className="float-end">+</span>
            </div>
            <hr />
            <div className="border-2 mt-2 border-red-500">
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
            <hr />
            <div className="border-2 mt-2 border-red-500">
              <span className="">
                Why should I not go to an agency directly{" "}
              </span>
              <span className="float-end">+</span>
            </div>
            <hr />
            <div className="border-2 mt-2 border-red-500">
              <span className="">
                Who can help me pick a right skillset and duration for me{" "}
              </span>
              <span className="float-end">+</span>
            </div>
          </div>
          <img className="absolute ml-10 mt-10" src="Union.png" alt="" />
          <br />
          <div className="mt-96 h-32 relative  w-full border-2 border-violet-700">
            <footer className=" w-full  bg-[#F5F5F5] rounded-full text-white text-center py-4 bottom-0">
              <p className="text-black text-start mx-5 pt-4">
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
