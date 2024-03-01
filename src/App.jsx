import './App.css'
import Card from './components/Card.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'

function App() {


  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-black dark:border-gray-500 m-0">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* them button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto mt-12">
            {/* Card */}

            <Card />
            <Card title='Jatin ki video' price='400' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
