import type { WatchedMovies } from "../types/movie";

export default function WatchedMovie({ movie }: { movie: WatchedMovies }) {
  return (
    <li className="flex justify-start items-start gap-3 border-slate-500 border-b-2 p-4">
      <div className="w-10 rounded-md">
        <img src={movie.poster}
          className="w-full rounded-sm"
          alt="movie name" />
      </div>
      <div>
        <p className="font-semibold mb-2">{movie.title}</p>
        <div className="flex justify-between items-center gap-3">
          <div className="text-sm font-bold flex justify-start items-center">
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
          </div>
          <div className="text-sm font-bold flex justify-start items-center ">
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </div>
          <div className="text-sm font-bold flex justify-start items-center">
            <span>⌛</span>
            <span>{movie.runtime} min</span>
          </div>
        </div>
      </div>
    </li>
  )
}