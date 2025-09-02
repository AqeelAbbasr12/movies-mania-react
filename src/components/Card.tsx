import { useState } from "react"

export default function Card({ children }: any) {
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow((isShow) => !isShow)
  }
  return (
    <div className="relative h-full w-full bg-slate-600 rounded-md p-2" >
      <button
        onClick={toggleShow}
        className="p-0 absolute h-8 w-8 right-3 cursor-pointer flex justify-center items-center rounded-full bg-gray-900 text-gray-100"
      >
        {isShow ? '➖' : '➕'}
      </button>
      {isShow ? children : null}
    </div>
  )
}