// type Movie = {
//   id: number,
//   name: string,
//   image: string,
//   year: string
// }

export default function Item() {
  return (
    <li className="flex justify-start items-start gap-3 border-slate-500 border-b-2 p-4">
      <div className="w-10 rounded-md">
        <img src="https://m.media-amazon.com/images/M/MV5BNGQyMWQ0ZjItMGMyOC00Y2RlLWIzZDQtZjhmZTdiNDdhOTdmXkEyXkFqcGc@._V1_SX300.jpg"
          className="w-full rounded-sm"
          alt="movie name" />
      </div>
      <div>
        <p className="font-semibold ">Inter Star Wars 2: The Last Jehi</p>
        <p>🗓️ 2017</p>
      </div>
    </li>
  )
}