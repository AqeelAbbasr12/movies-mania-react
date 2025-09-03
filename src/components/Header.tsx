import Logo from "./Logo"
import NumResults from "./NumResults"
import Search from "./Search"
import type { Movie } from "../types/movie"

export default function Header({ movies }: { movies: Movie[] }) {

  return (
    <header className="h-20 w-full flex justify-between items-center bg-purple-700 rounded-md px-2 md:px-10 lg:px-20">
      <Logo />
      <div className="w-1/4">
        <Search />
      </div>
      <NumResults movies={movies} />
    </header>
  )
}