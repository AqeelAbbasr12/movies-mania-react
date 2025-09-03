// type Movie = {
//   id: number,
//   name: string,
//   image: string,
//   year: string
// }

import type { Movie } from "../../types/movie";

export default function Item({ movie }: { movie: Movie }) {
  return (
    <li className="flex justify-start items-start gap-3 border-slate-500 border-b-2 p-4">
      <div className="w-10 rounded-md">
        <img src={movie.poster}
          className="w-full rounded-sm"
          alt={movie.title} />
      </div>
      <div>
        <p className="font-semibold mb-2">{movie.title}</p>
        <p className="flex justify-start items-center gap-1 text-sm font-normal">
          <span>🗓️</span>
          <span>{movie.year}</span>
        </p>
      </div>
    </li>
  )
}