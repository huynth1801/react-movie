import "./movie-card.scss";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { category } from "../../api/tmdbApi";
import configApi from "../../api/configApi";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = configApi.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3 className="text-[16px] font-bold text-black dark:text-white md:text-h3">
        {item.title || item.name}
      </h3>
    </Link>
  );
};

export default MovieCard;
