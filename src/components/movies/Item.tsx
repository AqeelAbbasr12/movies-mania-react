import type { Movie } from "../../types/movie";

export default function Item({ movie }: { movie: Movie }) {
  return (
    <li className="flex justify-start items-start gap-3 border-slate-500 border-b-2 p-4">
      <div className="w-10 rounded-md">
        <img src={movie.Poster}
          className="w-full rounded-sm"
          alt={movie.Title} />
      </div>
      <div>
        <p className="font-semibold mb-2">{movie.Title}</p>
        <p className="flex justify-start items-center gap-1 text-sm font-normal">
          <span>🗓️</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}