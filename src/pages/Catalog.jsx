import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { category as cate } from "../api/tmdbApi";

const Catalog = () => {
  const { category } = useParams();
  return (
    <>
      <div className="containers">
        <PageHeader>
          {category === cate.movie ? "Movies" : "TV Series"}
        </PageHeader>
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
