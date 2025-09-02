export default function WatchedSummery() {
  return (
    <div className=" bg-gray-700 py-5 px-3 rounded-md">
      <p className="font-semibold text-lg mb-2">Movies you watched</p>

      <div className="flex justify-between items-center">
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>🔢</span>
          <span>2 movies</span>
        </div>
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>⭐</span>
          <span>8.65</span>
        </div>
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>🌟</span>
          <span>9.5</span>
        </div>
        <div className="text-sm font-bold flex justify-start items-center gap-1">
          <span>⌛</span>
          <span>132 min</span>
        </div>
      </div>
    </div>
  )
} 