import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const { users } = useContext(UserContext);

  const user = users.find((user) => user.id === parseInt(id, 10));

  return (
    <div>

      <div className="  flex flex-col  items-start p-6 justify-center gap-2 ml-14  mt-10 rounded h-32 w-52">
        <p className=" text-red-400 font-bold text-5xl"> {user.name}</p>
        <p className=" text-red-300 font-bold text-3xl"> {user.age}</p>
        <p className=" text-red-300 font-bold text-2xl"> {user.city}</p>
      </div>

    </div>
  );
};

export default UserDetails;
