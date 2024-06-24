import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushi, setSushi] = useState([])
  const sushiPerPage = 4
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSushi = sushi.slice(currentIndex, currentIndex + sushiPerPage)

  function handleNextSushi() {
    const nextIndex = currentIndex + sushiPerPage
    if (nextIndex < sushi.length) setCurrentIndex(nextIndex)
  }

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushi(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer
        currentSushi={currentSushi}
        handleNextSushi={handleNextSushi}
      />
      <Table />
    </div>
  )
}

export default App
