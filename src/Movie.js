import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import './Movie.css';

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie,addToFavorites,isLoading} = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      {/* if movie is present then only show data else remain as it is  */}
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const {Poster,Title} = curMovieElem;
                const movieName = Title.substring(0, 15);
                
                return (
                  <NavLink to={`movie`} >
                      <div className="card">
                        <div className="card-info">
                          <div>
                          <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                          </div>
                          <div>
                          <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                         </h2>
                         </div>

                         <div className="add-to-favorites">
                         <button onClick={addToFavorites}>ADD TO FAVORITE</button>
                         </div>
                         
                        </div>
                     </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;


