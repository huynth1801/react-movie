import "./App.scss";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
import useDarkMode from "./theme/useDarkMode";
import { useEffect, useRef } from "react";

function App() {
  // const [theme, toggleDarkMode] = useDarkMode();
  // // console.log(theme);
  // const themeRef = useRef();
  // useEffect(() => {
  //   const addTheme = () => {
  //     if (toggleDarkMode) {
  //       themeRef.current.classList.add(`theme--${theme}`);
  //     } else {
  //       themeRef.current.classList.add(`theme--${theme}`);
  //     }
  //   };
  //   addTheme();
  //   console.log(themeRef);
  // });
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
