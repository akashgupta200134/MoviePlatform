import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[250px] h-full border-r border-zinc-400  text-white p-4 flex flex-col">
      <div className="flex items-center mb-8">
        <i className="ri-tv-fill text-4xl text-[#6556CD] mr-2"></i>
        <span className="text-2xl font-semibold">RangManch</span>
      </div>

      <nav className="flex flex-col  flex-grow">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-300">New Feeds</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/trending"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD] transition-colors duration-200"
              >
                <i className="ri-fire-fill mr-2"></i>
                <span>Trending</span>
              </Link>
            </li>
            <li>
              <Link
                to="/popular"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD]  transition-colors duration-200"
              >
                <i className="ri-bar-chart-fill mr-2"></i>
                <span>Popular</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tv-shows"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD] transition-colors duration-200"
              >
                <i className="ri-tv-fill mr-2"></i>
                <span>TV Shows</span>
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD]  transition-colors duration-200"
              >
                <i className="ri-movie-2-fill mr-2"></i>
                <span>Movies</span>
              </Link>
            </li>
            <li>
              <Link
                to="/people"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD]  transition-colors duration-200"
              >
                <i className="ri-team-fill mr-2"></i>
                <span>People</span>
              </Link>
            </li>
          </ul>
        </div>

        <hr className="border-t border-zinc-400 my-2 -mt-2" />

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-300">
            Website Information
          </h2>
          <ul className="space-y-1">
            <li>
              <Link
                to="/about"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD]  transition-colors duration-200"
              >
                <i className="ri-information-fill mr-2"></i>
                <span>About Website</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center p-3 rounded-md hover:bg-[#6556CD]  transition-colors duration-200"
              >
                <i className="ri-mail-line mr-2"></i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;