import { useEffect, useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import List from "./components/movies/List"
import WatchedList from "./components/WatchedList"
import WatchedSummery from "./components/WatchedSummery"
import type { Movie, WatchedMovies } from "./types/movie"
import Details from "./components/movies/Details"

// const tempMovieData: Movie[] = [
//   {
//     imdbID: "tt1375666",
//     title: "Inception",
//     year: "2010",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     title: "The Matrix",
//     year: "1999",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     title: "Parasite",
//     year: "2019",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData: WatchedMovies[] = [
//   {
//     imdbID: "tt1375666",
//     title: "Inception",
//     year: "2010",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     title: "Back to the Future",
//     year: "1985",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [selected, setSelected] = useState(true);

  const API_KAY = '4e6406f7';

  useEffect(() => {
    if (query.length < 3) {
      setMovies([])
    };

    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KAY}&s=${query}`, { signal: controller.signal });
        const data = await res.json();
        if (data.Search.length > 0) {
          setMovies(data.Search || [])
        }
      } catch (error) {
        console.log("Something went wrong with the api. Please wait a bit and try again.", error)
      }
    }
    fetchMovies()
    return () => controller.abort();
  }, [query]);

  return (
    <>
      <div className="w-screen h-screen bg-gray-900 text-white p-2">
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <Header movies={movies} query={query} setQuery={setQuery} />
        </div>
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-2 gap-2 justify-between items-center h-[calc(100vh-120px)] mt-5">
          <Card>
            <List movies={movies} />
          </Card>
          <Card >
            {
              selected ?
                <Details /> :
                <>
                  <WatchedSummery watched={watched} />
                  <WatchedList watchedMovies={watched} />
                </>
            }
          </Card>
        </div>
      </div>
    </>
  )
}

export default App

