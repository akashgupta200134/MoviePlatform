import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] border-r-2 border-zinc-300 h-full p-10 ">
      <h1 className="-mt-5 font-bold text-white">
        <i class="ri-tv-fill text-5xl  text-[#6556CD] mr-2"></i>
        {/* <DotLottieReact
          className="h-50 w-50"
          src="https://lottie.host/a5b63176-2653-4449-9c54-a923f8744a70/EpUgj8K9ag.lottie"
          loop
          autoplay
        /> */}
        <span className=" text-2xl">RangManch</span>
      </h1>

      <nav className=" flex flex-col gap-3 text-zinc-400 ">
        <h1 className=" text-xl font-semibold text-white mt-6 mb-3">
          New Feeds
        </h1>

        <Link className=" -ml-5 hover:bg-[#6556CD]  hover:text-white text-xl duration-300 rounded-lg p-3">
        <i class="ri-fire-fill"></i>  Trending
        </Link>
        <Link className=" -ml-5 hover:bg-[#6556CD]  hover:text-white  text-xl duration-300 rounded-lg p-3">
        <i class="ri-bard-fill"></i>  Popular
        </Link>
        <Link className="-ml-5 hover:bg-[#6556CD]  hover:text-white   text-xl duration-300 rounded-lg  p-3">
        <i class="ri-tv-fill"></i>  Tv Shows
        </Link>
        <Link className="-ml-5 hover:bg-[#6556CD]   hover:text-white   text-xl duration-300 rounded-lg p-3  ">
        <i class="ri-movie-2-ai-fill"></i> Movies
        </Link>
        <Link className="-ml-5 hover:bg-[#6556CD]   hover:text-white   text-xl duration-300 rounded-lg p-3  ">
        <i class="ri-team-fill"></i>  People
        </Link>
      </nav>

<hr className=" border-none h-[1px] bg-zinc-400 mt-3 w-full"  />

<nav className=" flex flex-col gap-3 text-zinc-400 ">
        <h1 className=" text-xl font-semibold text-white mt-5 ">
          Website Information
        </h1>

        <Link className=" -ml-5 hover:bg-[#6556CD]  hover:text-white text-xl duration-300 rounded-lg p-3">
        <i class="ri-information-fill"></i> About
        </Link>
        <Link className=" -ml-5 hover:bg-[#6556CD]  hover:text-white  text-xl duration-300 rounded-lg p-3">
        <i class="ri-phone-fill"></i> Contact
        </Link>
     
       
      </nav>




    </div>
  );
};

export default SideNav;
