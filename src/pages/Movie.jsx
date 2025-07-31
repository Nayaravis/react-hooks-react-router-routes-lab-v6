import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error))
  }, [id])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <span key={index}>
                {genre}
              </span>
            ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
