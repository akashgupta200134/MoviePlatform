import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");

  const [search, setsearch] = useState([]);

  const GetSearches = async () => {
    const { data } = await axios.get(`/search/multi?query=${query}`);
    // console.log(data);
    setsearch(data.results);
  };

  useEffect(() => {
   GetSearches();
  }, [query]);

  return (
    <div className=" w-[50%] h-[10vh]  relative flex items-center justify-start ml-[20%] mt-3">
      <i className="ri-search-2-line text-white ml-2 -mr-8 text-3xl "></i>

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
          className="ri-close-large-line text-zinc-400 text-3xl"
        ></i>
      )}

      <div className="absolute w-[70%] max-h-[50vh]  mt-2 ml-3 bg-zinc-200 top-[90%] rounded-md overflow-auto">
        {search.map((items, index) => (
          <Link
            key={index}
            className=" hover:text-black hover-bg-zinc-400 duration-300 w-[100%] font-semibold text-zinc-600  py-4 px-5 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className=" w-[10vh] h-[10vh] object- rounded-lg mr-4 shadow-lg "
              src={`https://image.tmdb.org/t/p/original/${
                items.backdrop_path || items.poster_path || items.profile_path
              }`}
              alt="Image Not Available"
            />
            <span>
              {items.title ||
                items.orignal_title ||
                items.name ||
                items.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;

