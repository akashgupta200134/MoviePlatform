import { Link } from "react-router-dom";

const Cards = ({ data , title }) => {
  return (
    <div className=" flex flex-wrap gap-5  mt-8 -ml-7    items-center justify-center w-screen ">
      {data.map((item, index) => (
        <Link
          to={`/details/${item.id}`} // Replace with your desired path
          className="w-[50vh]   "
          key={index}
        >
          <img className=" h-[30vh] rounded-lg object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path || item.profile_path
            }`}
            alt=""
          />
          <h1 className=" text-xl text-center text-white mt-3 font-semibold">

          {item.title || item.original_title || item.name || item.original_name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;