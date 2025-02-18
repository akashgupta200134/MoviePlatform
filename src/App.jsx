import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./store/Reducers/userReducer";

const App = () => {
  const { users } = useSelector((state) => state.userReducer); /// useSeclctor ke help se hum store ke data ko  hum apne kisi bhi component me use kar skate hai

  const dispatch = useDispatch(); // hume action ko call kanre ke liye useDisoatch function ka use karne padta hai

  const DeleteHandler = (index) => {
    // console.log(index);
    dispatch(deleteUser(index)); // yaha pe humne action ko call kiya hai useDispatch ka use kar ke
  };

  return (
    <div className=" bg-red-300 h-full w-1/2 flex flex-col items-start justify-start ml-auto mr-auto p-5 mt-10">
      <div className="bg-red-500 text-center mt-10 w-60 ml-auto mr-auto  h-20 py-4  ">
        <h1 className=" text-white text-5xl font-bold">User List </h1>
      </div>

      <ul className=" mt-5 ml-52 cursor-pointer">
        {users.map((items, index) => {
          return (
            <li key={index} className="">
              {/* {items.userid} */}
              <h1>
                {items.username}
                <span
                  onClick={() => DeleteHandler(index)}
                  className=" text-red-500 font-semibold px-1"
                >
                  X
                </span>
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
