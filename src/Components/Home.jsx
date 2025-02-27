import { useEffect, useState } from "react";
import SideNav from "../Templets/SideNav";
import TopNav from "../Templets/TopNav";
import Header from "../Templets/Header";
import axios from "../utils/Axios";
import Horizontalcards from "../Templets/Horizontalcards";
import Loader from "../Templets/Loader";


const Home = () => {
  document.title = "RangManch | Home";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomData);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      setTrending(data.results);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    if (!wallpaper) {
      getWallpaper();
    }
    if (!trending) {
      getTrending();
    }
  }, [wallpaper, trending]);

  return wallpaper && trending ? (
   <>
   
         <SideNav />
  <div className=" w-[100%] h-full overflow-auto overflow-x-hidden ">
       <TopNav />
         
          <Header data={wallpaper} />
    <Horizontalcards trendingData={trending} />
  </div>
   </>

      
          
 
  ) : (
<Loader/>
  );
};

export default Home;