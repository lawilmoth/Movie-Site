import { useParams } from "react-router-dom";
import { loadMovie } from "../services/api";
import { useEffect, useState } from "react";

function MovieDetail() {
  let params = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log("hello");

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
        s;
        setLoading(false);
        console.log(movie);
      }
    };

    loadCurrentMovie();
  }, [params]);

  return <>{loading ? <h1>Loading</h1> : <h1>Movie: {movie.id} </h1>};</>;
}
export default MovieDetail;
