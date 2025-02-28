const Horizontalcards = ({ trendingData }) => {
  return (
    <div className="w-full h-[50vh] ml-8">
      <div>
        <h1 className="text-white font-bold text-3xl p-2 mt-10">Top Trending</h1>
      </div>

      <div className="relative w-full overflow-x-auto flex items-center scrollbar-hide">
        <div className="flex space-x-5 mt-3 mr-10">
          {trendingData.map((item, index) => (
            <div key={index} className="min-w-[300px] relative">
              <img
                className="w-[300px] h-[30vh] object-cover rounded-xl shadow-lg"
                src={`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.poster_path || item.profile_path
                }`}
                alt={item.title || item.name || "Trending"}
              />
              <div className="absolute bottom-0 left-0 w-full   text-center  font-bold text-white p-4 rounded-b-xl">
                <p className="text-lg font-bold truncate">
                  {item.title || item.name || item.original_title || item.original_name}
                </p>
              


               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horizontalcards;