import { BsArrowUpCircle } from "react-icons/bs";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          className="z-150 fixed bottom-8 right-4
            rounded-full text-6xl font-bold text-black opacity-60 
            hover:bg-red-500 hover:text-white hover:opacity-100
            dark:text-white md:bottom-8 
            md:right-8 
            md:text-4xl
           "
          onClick={scrollUp}
        >
          <BsArrowUpCircle />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
