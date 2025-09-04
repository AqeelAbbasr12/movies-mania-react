import type { Movie } from "../../types/movie";
import Item from "./Item";

export default function List({ movies }: { movies: Movie[] }) {
  console.log(movies)
  return (
    <ul>
      {
        movies.map((movie) => (
          <Item key={movie.imdbID} movie={movie} />
        ))
      }
    </ul>
  )
}