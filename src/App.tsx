import { useEffect, useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import List from "./components/movies/List"
import WatchedList from "./components/WatchedList"
import WatchedSummery from "./components/WatchedSummery"
import type { Movie, WatchedMovies } from "./types/movie"
import Details from "./components/movies/Details"

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [selectedMovie, setSelectedMovie] = useState({});

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
        if (data.Response === "True" && data.Search) {
          const uniqueMovies: Movie[] = Array.from(
            new Map(data.Search.map((m: Movie) => [m.imdbID, m])).values()
          ) as Movie[];;
          setMovies(uniqueMovies);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log("Something went wrong with the api. Please wait a bit and try again.", error)
      }
    }
    fetchMovies()
    return () => controller.abort();
  }, [query]);

  useEffect(() => {
    if (!selectedMovieId) return;
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KAY}&i=${selectedMovieId}`);
        const data = await res.json();
        if (data) {
          setSelectedMovie(data)
        }
      } catch (error) {
        console.log("Something went wrong with the api. Please wait a bit and try again.", error)
      }
    }
    fetchMovie()
  }, [selectedMovieId])

  return (
    <>
      <div className="w-screen h-screen bg-gray-900 text-white p-2">
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <Header movies={movies} query={query} setQuery={setQuery} />
        </div>
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-2 gap-2 justify-between items-center h-[calc(100vh-120px)] mt-5">
          <Card>
            <List setSelectedMovieId={setSelectedMovieId} movies={movies} />
          </Card>
          <Card >
            {
              selectedMovieId ?
                <Details movie={selectedMovie} /> :
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

