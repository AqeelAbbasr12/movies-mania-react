export default function Header() {
  return (
    <header className="h-20 w-full flex justify-between items-center bg-purple-700 rounded-md px-2 md:px-10 lg:px-20">
      <div className="text-2xl lg:text-4xl text-white ">
        🎬 Moviesmania
      </div>
      <input type="text" placeholder="Search a movie" className="h-10 w-1/4 font-semibold bg-white text-black px-2 rounded-md" />
      <div className="font-semibold text-sm lg:text-lg "> Found top 10 results</div>
    </header>
  )
}