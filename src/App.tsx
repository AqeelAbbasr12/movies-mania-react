import Card from "./components/Card"
import Header from "./components/Header"
import Item from "./components/movies/Item"

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 text-white p-2">
        <div className="mx-auto w-3/4">
          <Header />
        </div>
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-2 justify-between items-center h-[calc(100vh-120px)] mt-5">
          <Card>
            <Item />
          </Card>
          <Card />
        </div>
      </div>
    </>
  )
}

export default App

