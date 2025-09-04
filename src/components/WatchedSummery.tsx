import type { WatchedMovies } from "../types/movie"

const average = (arr: any) =>
  arr.reduce((acc: any, cur: any, i: any, arr: any) => acc + cur / arr.length, 0);

export default function WatchedSummery({ watched }: { watched: WatchedMovies[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime));

  return (
    <div className=" bg-gray-700 py-5 px-3 rounded-md">
      <p className="font-semibold text-lg mb-2">Movies you watched</p>

      <div className="flex justify-start items-center gap-3">
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>🔢</span>
          <span>2 movies</span>
        </div>
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>⭐</span>
          <span>{avgUserRating}</span>
        </div>
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>🌟</span>
          <span>{avgImdbRating}</span>
        </div>
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>⌛</span>
          <span>{avgRuntime}</span>
        </div>
      </div>
    </div>
  )
} 