import Button from "../Button/Button";
import { category } from "../../api/tmdbApi";
import configApi from "../../api/configApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenreCard = (props) => {
  const item = props.item;
  const [filter, setFiltered] = useState([]);

  useEffect(() => {
    if (props.genreId === 0) {
      setFiltered(item);
    } else {
      const filtered = item.results.filter((movie) =>
        movie.results.genre_ids.includes(props.genreId)
      );
      setFiltered(filtered);
    }
  }, [props.genreId]);

  const link = "/" + category[props.category] + "/" + filter.id;
  const bg = configApi.w500Image(filter.poster_path || filter.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{filter.title || filter.name}</h3>
    </Link>
  );
};

export default GenreCard;
