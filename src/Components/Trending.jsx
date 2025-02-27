import { useNavigate } from "react-router-dom";
import Dropdown from "../Templets/Dropdown";
import TopNav from "../Templets/TopNav";
import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import Cards from "../Templets/Cards";
import Loader from '../Templets/Loader'


const Trending = () => {
 const navigate = useNavigate();
 const [category, setcategory] = useState("all");
 const [trending, settrending] = useState(null);
 const [duration, setduration] = useState("day");


 const getTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/${category}/${duration}`);
    settrending(data.results);

  }
  
   catch (error) {
    console.error("Error fetching trending data:", error);
  }
};



useEffect(() => {
 getTrending(); 
}, [category, duration]);




   return trending ?  ( 
    <div className=" p-5 w-screen h-screen overflow-x-hidden  ">
      <div className="  w-full  flex items-center">
        <i  onClick = {() => navigate(-1)} className = "hover:text-[#6556CD] text-white text-2xl mr-4 ri-arrow-left-line" >

          
           </i>
          <h1 className="text-2xl font-bold ml-3 text-white ">Trending</h1>
            <TopNav />

  
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func = {(e)=>{
              setcategory(e.target.value)

            }}
          
          />

<div className=" w-[1%]"></div>
          <Dropdown
            title="Duration"
            options={["week","day"]}
            func = {(e)=>{
              setduration(e.target.value)

            }}
          />
          

        </div>
      
      <Cards  data = {trending} title = {category}/>


      </div> ) : <Loader/>

    
  
};

export default Trending;