import MovieCard from "../MovieCard/MovieCard";
import Input from "../Input/Input";
import Button, { OutlineButton } from "../Button/Button";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GenreCard from "../GenreCard/GenreCard";
import "./movie-grid.scss";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const { keyword } = useParams();

  useEffect(() => {
    // Get list movie and tv show
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        // const params = { query: keyword, page: 1 };
        response = await tmdbApi.search(props.category, keyword, page);
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword, page]);

  // Load more
  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case props.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      // const params = {
      //   query: keyword,
      //   page: page + 1,
      // };
      // console.log(params[0]);
      response = await tmdbApi.search(props.category, keyword, page + 1);
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };
  return (
    <>
      <div className="section mb-3">
        <div className="movie-features">
          <MovieSearch category={props.category} keyword={keyword} />
          <MovieFilter category={props.category} />
        </div>
      </div>

      <div className="movie-grid">
        {items.map((item, index) => (
          <MovieCard category={props.category} item={item} key={index} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load More
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

export default MovieGrid;

const MovieSearch = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Search for a movie"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

const MovieFilter = (props) => {
  const [movie, setMovie] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");
  const [genreId, setGenreId] = useState(0);
  // const [items, setItems] = useState()

  // useEffect(() => {
  //   // Get list movie and tv show
  //   const getList = async () => {
  //     let response = null;
  //     if (activeGenre === "All") {
  //       const params = {};
  //       switch (props.category) {
  //         case category.movie:
  //           response = await tmdbApi.getMoviesList(movieType.upcoming, {
  //             params,
  //           });
  //           break;
  //         default:
  //           response = await tmdbApi.getTvList(tvType.popular, { params });
  //       }
  //     } else {
  //       response = await tmdbApi.genres(props.category, { params: {} });
  //     }
  //     setMovie(response.results);
  //   };
  //   getList();
  // }, [props.category]);

  useEffect(() => {
    const getGenres = async () => {
      const response = await tmdbApi.genres(props.category, { params: {} });
      console.log(response.id);
      setMovie(response);
    };
    getGenres();
  }, [props.category]);

  useEffect(() => {
    if (activeGenre === "All") {
      setGenreId(0);
    } else {
      const filtered = movie.genres.filter((item) => item.name === activeGenre);
      setGenreId(filtered[0].id);
      console.log(genreId);
    }
  }, [genreId, activeGenre]);

  return (
    <div className="movie-filter">
      <select
        name="types"
        id="type"
        onChange={(e) => setActiveGenre(e.target.value)}
      >
        <option value="">All</option>
        {movie.genres &&
          movie.genres.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
      </select>
      {/* <div className="movie-grid">{}</div> */}
    </div>
  );
};
