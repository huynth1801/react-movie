import "./App.scss";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="dark:bg-black bg-white ">
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
