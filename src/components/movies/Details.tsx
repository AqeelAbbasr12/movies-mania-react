import Rating from "../Rating";

export default function Details() {
  return (
    <>
      <div className="flex justify-start items-start flex-1 gap-4 bg-gray-700">
        <div className="w-32">
          <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" className="w-full" alt="movie image" />
        </div>
        <div className="flex flex-col justify-between items-start text-semibold gap-y-3">
          <h1 className="text-3xl font-semibold">Inception</h1>
          <p className="text-semibold"><span>16 Jul 2010</span>. <span>148 min</span></p>
          <p><span>Action, Adventure, Sci-Fi</span></p>
          <p>⭐ 8.8 imdb rating</p>
        </div>

      </div>

      <Rating className="py-5 bg-gray-700 rounded-md mt-8" />

      <div className="flex flex-col gap-3 mx-auto w-11/12 text-sm mt-8">

        <p><span className="font-bold">Plot: </span>The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.</p>
        <p><span className="font-bold">Actors: </span>Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page</p>
        <p><span className="font-bold">Directed by: </span>Christopher Nolan</p>
      </div>

    </>
  )
}  