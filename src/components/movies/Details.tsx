import Rating from "../Rating";

export default function Details({ movie }: any) {
  return (
    <>
      <div className="flex justify-start items-start gap-4 bg-gray-700">
        <div className="w-32 min-w-32">
          <img src={movie.Poster} className="w-full" alt="movie image" />
        </div>
        <div className="flex flex-col justify-between items-start font-semibold gap-y-1 py-4">
          <h1 className="text-2xl xl:text-3xl font-semibold">{movie.Title}</h1>
          <p className="font-semibold">Released on: <span className="font-light">{movie.Released}</span></p>
          <p>Duration: <span className="font-light">{movie.Runtime}</span></p>
          <p>Genre: <span className="font-light">{movie.Genre}</span></p>
          <p>⭐ {movie.imdbRating} imdb rating</p>
        </div>
      </div>

      <Rating className="py-5 bg-gray-700 rounded-md mt-8" />

      <div className="flex flex-col gap-3 mx-auto w-11/12 text-sm mt-8">
        <p><span className="font-bold">Plot: </span>{movie.Plot}</p>
        <p><span className="font-bold">Actors: </span>{movie.Actors}</p>
        <p><span className="font-bold">Directed by: </span>{movie.Director}</p>
      </div>

    </>
  )
}  