export const Explore = () => {
  return (
    <>
      <div className="flex justify-center items-center align-middle mt-10 ">
        <div className="absolute">
          <h1 className="text-base">Primary CTA</h1>
          <br />
          <div className=" mt-0">
            <button className="absolute -ml-20 h-16 w-64 p-1 bg-gray-950 text-white rounded-full hover:bg-[#4E4E4E]">
              Meet Your Candidates →
            </button>
          </div>
        </div>
        <div className="absolute  mt-72">
          <h1 className="text-base">Secondary CTA</h1>
          <br />
          <button className="absolute -ml-5 h-20 w-40 p-1 border-2 bg-gray-50 text-black rounded-full hover:bg-[#F1F1F1] ">
            Get Projects
          </button>
        </div>
        <div className="absolute mt-72">
          <h1 className="mt-80">Carousal</h1>
          <div className="flex gap-1 p-1 mt-2  ms-14">
            <img src="/Ellipse 10742.png" alt="" />
            <img src="/Ellipse 10743.png" alt="" />
            <img src="/Ellipse 10743.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
