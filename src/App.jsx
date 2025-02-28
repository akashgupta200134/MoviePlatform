import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Treanding from "./Components/Trending"



const App = () => {


  return (
    <div className=" bg-[#1F1E24]  w-screen h-screen flex   ">
       <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/trending" element = {<Treanding/>}/>
       </Routes>


    </div>
  )
}

export default App