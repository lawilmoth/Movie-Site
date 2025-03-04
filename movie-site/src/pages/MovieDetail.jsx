import { useParams } from "react-router-dom";
import { loadMovie } from "../services/api";
import { useEffect, useState } from "react";
import "../css/MovieDetail.css";

function MovieDetail() {
  let params = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadCurrentMovie = async () => {
      try {
        const movieId = params.movieID;
        const mymovie = await loadMovie(movieId);
        setMovie(mymovie);
        console.log(mymovie);
      } catch (err) {
        console.log(err);
        setError("Failed to load movie...");
      } finally {
        setLoading(false);
      }
    };

    loadCurrentMovie();
  }, [params]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="banner-container">
          <img
            src={`https://tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt=""
            className="banner"
          />
          <div className="content">
            <h1>{movie.title} </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      ;
    </>
  );
}
export default MovieDetail;
