import React from "react";

const Horizontalcards = ({ trendingData }) => {
  return (
    <div className=" w-full h-[50vh] ml-8    ">
      <div>
         <h1 className=" text-white font-bold text-3xl p-4 ml-5"> Top Trending</h1>
      </div>
     
      <div className="relative w-screen  overflow-x-scroll  flex ">
      {/* Left Arrow (if needed in future) */}
      <span className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer p-2 bg-gray-900/50 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>

      {trendingData.map((item, index) => (
        <div
          key={index}
          className="min-w-[60vh] mr-5  "
        >
          <img
            className="w-[60vh] h-[30vh] object-cover rounded-xl shadow-lg"
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path || item.profile_path
            }`}
            alt="Trending"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Horizontalcards; 