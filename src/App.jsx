import { Routes, Route } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Series from "./components/Series";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-white">
      <div className="px-10 3md:px-14 lg:px-20 flex-grow scroll-smooth">
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/details/:mediaType/:id" element={<MovieDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
