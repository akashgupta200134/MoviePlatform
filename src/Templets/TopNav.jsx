import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className=" w-auto h-[10vh]  relative flex items-center justify-start  ml-[20%] mt-3">
      <i class="ri-search-2-line text-white ml-2 -mr-8 text-3xl "></i>

      <input
        type="text"
        placeholder="Search Anything"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] p-5 mx-10 text-white  text-xl   border-none outline-none bg-transparent rounded-xl"
      />

      {query.length > 0 && (
        <i
          onClick={() => {
            setQuery("");
          }}
          class="ri-close-large-line text-zinc-400 text-3xl"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh]  mt-6 ml-3 bg-zinc-200 top-[90%] rounded-md overflow-auto">
        {/* 
     <Link className = " hover:text-black hover-bg-zinc-400 duration-300 w-[100%] font-semibold text-zinc-600  p-8 flex justify-start items-center border-b-2 border-zinc-100" >
            <img src="" alt="" />
            <span>Hello</span>
            </Link> */}
      </div>
    </div>
  );
};

export default TopNav;
