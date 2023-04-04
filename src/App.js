import "./App.scss";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default App;
