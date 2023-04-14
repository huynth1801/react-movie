import "./hero-slide.scss";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import configApi from "../../api/configApi";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button, { OutlineButton } from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch (error) {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
};

export default HeroSlide;

const HeroSlideItem = (props) => {
  let navigate = useNavigate();

  const item = props.item;

  const background = configApi.orignalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    console.log(modal);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      console.log(videoSrc);
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };
  return (
    <div
      className={`hero-slide__item ${props.className} before:bg-white before:bg-opacity-40 after:bg-gradient-to-t after:from-white dark:before:bg-black dark:before:bg-opacity-40 dark:after:bg-gradient-to-t dark:after:from-black`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content containers">
        <div className="hero-slide__item__content__info ">
          <h2 className="title text-2xl font-bold text-black dark:text-white">
            {item.title}
          </h2>
          <div className="overview text-black dark:text-white">
            {item.overview}
          </div>
          <div className="btns ">
            <Button
              onClick={() => navigate("/movie/" + item.id)}
              className="text-black dark:text-white"
            >
              Watch now
            </Button>
            <OutlineButton
              onClick={setModalActive}
              className="text-black hover:bg-black dark:text-white dark:hover:bg-white dark:hover:text-red-500 "
            >
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={configApi.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;

  const iframeref = useRef(null);

  const onClose = () => iframeref.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeref}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};
