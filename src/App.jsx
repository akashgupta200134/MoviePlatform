import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <div>
        <nav className=" flex justify-center items-center gap-10 mt-10 ">
          <Link to="/"> Home</Link>
          <Link to="/user"> User</Link>
          
          {/* <Link to="/userdetails">UserDetails</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/user" element={<User />} />

          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
