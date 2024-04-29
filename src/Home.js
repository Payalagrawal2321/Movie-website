import { useState } from "react";
import Movie from "./Movie";
import Search from "./search";
import Navbar from "./navbar";

const Home = () => {
    const [favourites, setFavorites] = useState([]);

    const addToFavorites = (Movie) => {
      setFavorites([...favourites,Movie]);
    };

    const movieData = {
    };
  return (
    <>
      <Navbar/>
      <div className="container">
        <Search />
        {/* <Movie /> */}
        <Movie {...movieData} addToFavorites={() => addToFavorites(movieData)} />
      </div>
    </>
  );
};

export default Home;

