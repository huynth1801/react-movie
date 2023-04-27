import { OutlineButton } from "../components/Button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/MovieList/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="containers">
        <div className="section mb-[3rem] ">
          <div className="section__header mb-[2rem]">
            <h2 className="text-[18px] font-bold text-black dark:text-white md:text-2xl">
              Trending Movies
            </h2>
            <Link to="/movie">
              <OutlineButton
                className="small text-black  
                          dark:text-white dark:hover:bg-white dark:hover:text-red-500 "
              >
                View more
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-[3rem] ">
          <div className="section__header mb-[2rem]">
            <h2 className="text-[18px] font-bold text-black dark:text-white md:text-2xl">
              Top Rated Movies
            </h2>
            <Link to="/movie">
              <OutlineButton
                className="small text-black  
                          dark:text-white dark:hover:bg-white dark:hover:text-red-500 "
              >
                View more
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-[3rem] ">
          <div className="section__header mb-[2rem]">
            <h2 className="text-[18px] font-bold text-black dark:text-white md:text-2xl">
              Trending TV
            </h2>
            <Link to="/tv">
              <OutlineButton
                className="small text-black  
                          dark:text-white dark:hover:bg-white dark:hover:text-red-500 "
              >
                View more
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-[3rem] ">
          <div className="section__header mb-[2rem]">
            <h2 className="text-[18px] font-bold text-black dark:text-white md:text-2xl">
              Top Rated TV
            </h2>
            <Link to="/tv">
              <OutlineButton
                className="small text-black  
                          dark:text-white dark:hover:bg-white dark:hover:text-red-500 "
              >
                View more
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
