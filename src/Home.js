import { useState } from "react";
import Movie from "./Movie";
import Search from "./search";

const Home = () => {
    const [favourites, setFavorites] = useState([]);

    const addToFavorites = (Movie) => {
      setFavorites([...favourites,Movie]);
    };

    const movieData = {
      Title: 'Movie Name',
      Ratings:'4,5/5',
      ReleaseDate:'2024-04-20',
      description:'description of the movie....',
    };
  return (
    <>
      <div className="container">
        <Search />
        <Movie />
        <Movie {...movieData} addToFavorites={() => addToFavorites(movieData)} />
      </div>
    </>
  );
};

export default Home;