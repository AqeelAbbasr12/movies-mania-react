import { useState } from "react"

export default function Search() {
  const [query, setQuery] = useState('')
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