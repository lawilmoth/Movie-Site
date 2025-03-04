import "./css/App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="movies" element={<MovieDetail />}>
          <Route path=":movieID" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
