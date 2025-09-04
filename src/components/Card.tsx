import { useState } from "react"

export default function Card({ children }: any) {
  const [isShow, setIsShow] = useState(true)

  const toggleShow = () => {
    setIsShow((isShow) => !isShow)
  }
  return (
    <div className="relative h-full w-full bg-gray-800 rounded-md p-2 overflow-auto" >
      <button
        onClick={toggleShow}
        className="p-0 sticky ms-auto h-8 w-8 top-0 right-0 cursor-pointer flex justify-center items-center rounded-full bg-gray-900 text-gray-100"
      >
        {isShow ? '➖' : '➕'}
      </button>
      {isShow ? children : null}
    </div>
  )
}