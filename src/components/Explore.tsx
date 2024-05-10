export const Explore = () => {
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <div className="-ml-40">
          <h1 className="">Primary CTA</h1>
          <br />
          <div className="absolute mt-0 -ms-5">
            <button className="h-20 w-72 p-1 bg-gray-950 text-white rounded-full hover:bg-[#4E4E4E]">
              Meet Your Candidates →
            </button>
          </div>
        </div>
        <div className="absolute -ml-40 mt-52">
          <h1>Secondary CTA</h1>
           <button className="h-20 w-72 p-1 border-2 bg-gray-50 text-black rounded-full hover:bg-[#F1F1F1]">Get Projects</button>
        </div>
        <div className="absolute mt-96 -ml-40">
            <h1>Carousal</h1>
            <div className="flex gap-1 mt-8 ms-14">
          <img src="/Ellipse 10742.png" alt="" />
          <img src="/Ellipse 10743.png" alt="" />
          <img src="/Ellipse 10743.png" alt="" />
        </div>
        </div>
      </div>
    </>
  );
};
