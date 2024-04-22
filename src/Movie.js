import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie,Rating,ReleaseDate,description,addToFavorites} = useGlobalContext();
  

  return (
    <>
      {/* if movie is present then only show data else remain as it is  */}
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Poster,Title, imdbRating} = curMovieElem;
                const movieName = Title.substring(0, 15);
                
                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
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
                         <p>Ratings: {Rating}</p>
                         <p>ReleaseDate: {ReleaseDate}</p>
                         <p>description: {description}</p>
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


