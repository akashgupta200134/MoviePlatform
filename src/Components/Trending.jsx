import { useNavigate } from "react-router-dom";
import Dropdown from "../Templets/Dropdown";
import TopNav from "../Templets/TopNav";
import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import Cards from "../Templets/Cards";
import Loader from '../Templets/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [trending, settrending] = useState([]);
    const [duration, setduration] = useState("day");
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    const getTrending = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(
                `/trending/${category}/${duration}?page=${page}`
            );

            if (data.results.length > 0) {
                settrending((prevTrending) => [...prevTrending, ...data.results]);
                setPage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error fetching trending data:", error);
        } finally {
            setLoading(false);
        }
    };

    const refreshHandler = () => {
        setPage(1);
        settrending([]);
        sethasMore(true);
        getTrending();
    };

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);

    return (
        <div className="w-screen h-screen  ">
            <div className="w-full flex items-center justify-center   "> 
                <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-white text-2xl ml-4 mr-4 ri-arrow-left-line"></i>
                <h1 className="text-2xl font-bold ml-3 text-white ">Trending</h1>
                <TopNav />
                <div className=" flex flex-row gap-2 mr-5 ">
                <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e) => { setcategory(e.target.value); }} />
                <Dropdown title="Duration" options={["week", "day"]} func={(e) => { setduration(e.target.value); }} />

                </div>
            </div>

            {loading && page === 1 ? (
                <Loader />
            ) : (
                <InfiniteScroll
                    dataLength={trending.length}
                    next={getTrending}
                    hasMore={hasMore}
                    loader={<Loader />}
                >
                    <Cards data={trending} title={category} />
                </InfiniteScroll>
            )}
        </div>
    );
};

export default Trending;



