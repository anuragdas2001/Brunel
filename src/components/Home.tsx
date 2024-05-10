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
          <button className="bg-black rounded-full text-white p-2" onClick={handleExploreMore}>
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
      <div className="h-auto absolute w-100 p-10  mt-32  bg-[#E8EEE7] rounded-xl">
        <h1 className="covered-by-your-grace-regular text-2xl m-10 ms-10 text-gray-400">
          What's on your mind
        </h1>
        <h1 className="ms-10 manrope -mt-6 text-5xl">Ask Questions</h1>
        {/* <hr /> */}
        <div className="grid float-end p-20 -mt-10">
          <div className="float-end ">
            <h1 className=" -ml-96 -mt-20 manrope text-xl">
              Do you offer freelancers?
            </h1>
            <h1 className="-mt-12 ml-20">+</h1>
          </div>
          <hr className="-ml-96 -mt-10" />
          <div className="float-end ">
            <h1 className=" -ml-96 mt-0 manrope text-xl">
              Whats the gurantee that I will be satisfied <br /> with the hired
              talent ?
            </h1>
            <h1 className="-mt-12 ml-20">+</h1>
          </div>
          <hr className="-ml-96" />
          <div className="float-end ">
            <h1 className=" -ml-96 manrope text-xl">
              Can I hire multiple talents at once talent ?
            </h1>
            <h1 className="-mt-12 ml-20">-</h1>
            <div>
              <h1 className="text-xs -ml-96 text-gray-500">
                if unhappy with a project,communicate with the freelancer, allow
                for revisions and <br /> refer to the agreement. Escalate to
                platform support if needed, considering <br />
                mediation. Review policies, seek collaborative solutions for
                resolution.
              </h1>
            </div>
          </div>
          <hr className="-ml-96" />
          <div className="float-end ">
            <h1 className=" -ml-96 manrope text-xl">
              Why should I not go to an agency directly?
            </h1>
            <h1 className="-mt-12 ml-20">+</h1>
          </div>
          <hr className="-ml-96" />
          <div className="float-end ">
            <h1 className=" -ml-96 manrope text-xl">
              Who can help me pick a right skillset <br /> and duration for me ?
            </h1>
            <h1 className="-mt-12 ml-20">+</h1>
          </div>
          <hr className="-ml-96" />
        </div>
        <img className="ml-10 mt-10" src="../../public/Union.png" alt="" />
      </div>
    </>
  );
};
