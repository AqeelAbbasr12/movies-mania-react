import type { Movie } from "../types/movie";

export default function NumResults({ movies }: { movies: Movie[] }) {
  return (
    <div className="font-semibold text-sm lg:text-lg "> Found top {movies.length} results</div>
  )
}