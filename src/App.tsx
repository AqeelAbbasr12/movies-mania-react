import Card from "./components/Card"
import Header from "./components/Header"
import List from "./components/movies/List"
import WatchedList from "./components/WatchedList"
import WatchedSummery from "./components/WatchedSummery"

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-900 text-white p-2">
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <Header />
        </div>
        <div className="w-full md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-2 gap-2 justify-between items-center h-[calc(100vh-120px)] mt-5">
          <Card>
            <List />
          </Card>
          <Card >
            <WatchedSummery />
            <WatchedList />
          </Card>
        </div>
      </div>
    </>
  )
}

export default App

