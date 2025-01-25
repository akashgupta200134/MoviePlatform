import React from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { useContext } from "react";

const User = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div className=" ml-32">
      <h1 className=" bg-red-400 text-center text-xl font-bold h-12 w-52 rounded-md p-2">
        User List
      </h1>

      <div className=" flex flex-col justify-center mt-20 gap-5 h-12 w-40">
        {users.map((items, id) => (
          <Link className=" bg-red-300 p-2 text-center mt-2" to ={ `/user/${items.id}`} key={items.id}>
              {items.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
