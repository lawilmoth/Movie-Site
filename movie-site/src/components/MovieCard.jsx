import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function handleLike() {
    alert(`${movie.title} was added to favorites`);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://tmdb.org/t/p/w500${movie.url}`} alt="movie.title" />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleLike}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
