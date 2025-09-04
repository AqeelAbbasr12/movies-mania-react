
export default function Search({ query, setQuery }: { query: string, setQuery: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <>
      <input type="text"
        placeholder="Search a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-10 font-semibold bg-white text-black px-2 rounded-md" />
    </>
  )
}