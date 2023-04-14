import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import configApi from "../../api/configApi";
import { useEffect, useState } from "react";
import "./detail.scss";
import "./CastList";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/MovieList/MovieList";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);
  return (
    <div>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${configApi.orignalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${configApi.orignalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title text-[32px] dark:text-white text-black">
                {item.title || item.name}
              </h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, index) => (
                    // console.log(item.genres.slice(0, 5));
                    <span
                      key={index}
                      className="genres__item dark:text-white text-black dark:bg-black bg-white"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview dark:text-white text-black">
                {item.overview}
              </p>
              <div className="cast">
                <div className="section__header">
                  <h2 className="text-2xl dark:text-white text-black">Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="section mb-[3rem]">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-[3rem]">
              <div className="section__header mb-[2rem]">
                <h2 className="text-[24px]">Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
