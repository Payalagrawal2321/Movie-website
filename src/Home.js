import Movie from "./Movie";
import Search from "./search";
import Navbar from "./navbar";

const Home = () => {
    const movieData = {
    };
  return (
    <>
      <Navbar/>
      <div className="container">
        <Search />
        <Movie {...movieData}  />
      </div>
    </>
  );
};

export default Home;

