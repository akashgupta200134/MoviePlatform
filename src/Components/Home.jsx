import React, { useEffect } from 'react';
import SideNav from '../Templets/SideNav';
import TopNav from '../Templets/TopNav';

const Home = () => {
  
    document.title = "RangManch | Home";


  return (
    <> 
    <SideNav/>
 
    <div className="w-[80%] h-full">
    <TopNav/>





    </div>

    </>
    
   
  );
};

export default Home;
