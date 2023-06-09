import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import configApi from "../../api/configApi";

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((item, index) => (
        <div className="casts__item" key={index}>
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${configApi.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name dark:text-white text-black dark:bg-black">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
