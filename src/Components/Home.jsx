import React, { useEffect, useState } from "react";
import SideNav from "../Templets/SideNav";
import TopNav from "../Templets/TopNav";
import Header from "../Templets/Header";
import axios from "../utils/Axios";
import Horizontalcards from "../Templets/Horizontalcards";

const Home = () => {
  document.title = "RangManch | Home";

  const [wallpaper, setwallpaper] = useState(null);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomadata =
        data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomadata);
      // console.log(randomadata);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(wallpaper);


  const [trending, setTrending] = useState(null);

  const getTrending = async () => {
    try {

      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    
    } catch (error) {
      console.log(error);
    }
  };


  console.log(trending);
  useEffect(() => {
    !wallpaper && getWallpaper();
    !trending && getTrending()
  }, []);


  
  return wallpaper ? (
    <>
      <SideNav />

        <div className=" "> 
           <TopNav />
          <Header data={wallpaper} />
          <Horizontalcards trendingData={trending}/>

        </div>
          
    </>
  ) : (
    <h1>Loding...</h1>
  );
};

export default Home;
