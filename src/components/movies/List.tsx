import type { Movie } from "../../types/movie";
import Item from "./Item";

export default function List({ movies, setSelectedMovieId }: { movies: Movie[], setSelectedMovieId: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <ul>
      {
        movies.map((movie) => (
          <Item setSelectedMovieId={setSelectedMovieId} key={movie.imdbID} movie={movie} />
        ))
      }
    </ul>
  )
}