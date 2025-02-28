import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Treanding from "./Components/Trending"
import Popular from "./Components/Popular"
import Movie from "./Components/Movie"
import TvShows from "./Components/TvShows"
import People from "./Components/People"



const App = () => {


  return (
    <div className=" bg-[#1F1E24]  w-screen h-screen flex   ">
       <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/trending" element = {<Treanding/>}/>
        <Route path="/popular" element = {<Popular/>}/> 
        <Route path="/movie" element = { <Movie/>}/>
        <Route path="/tvshows" element = { <TvShows/>}/>
        <Route path="/people" element = { <People/>}/>
       </Routes>


    </div>
  )
}

export default App