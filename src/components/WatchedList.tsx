import type { WatchedMovies } from "../types/movie";
import WatchedMovie from "./WatchedMovie";


export default function WatchedList({ watchedMovies }: { watchedMovies: WatchedMovies[] }) {
  return (
    <ul>
      {
        watchedMovies.map((movie: WatchedMovies) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        )
        )}
    </ul>
  )
}