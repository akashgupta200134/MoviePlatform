import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <div className="bg-[#1F1E24] w-screen h-auto flex">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
