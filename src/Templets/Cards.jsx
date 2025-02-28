// Cards.jsx
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
    return (
        <div className="flex  flex-wrap gap-5 bg-[#1f1e24] items-center justify-center w-[100%]    h-full ">
            {data.map((item, index) => (
                <Link
                    to={`/details/${item.id}`}
                    className="w-[50vh]"
                    key={index}
                >
                    <img
                        className="h-[30vh] rounded-lg object-cover max-w-full"
                        src={`https://image.tmdb.org/t/p/original/${
                            item.backdrop_path || item.poster_path || item.profile_path
                        }`}
                        alt=""
                    />
                    <h1 className="text-xl text-center text-white mt-3 font-semibold">
                        {item.title || item.original_title || item.name || item.original_name}
                    </h1>
                </Link>
            ))}
        </div>
    );
};

export default Cards;