import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushi, setSushi] = useState([])
  const sushiPerPage = 4
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSushi = sushi.slice(currentIndex, currentIndex + sushiPerPage)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushi(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer currentSushi={currentSushi} />
      <Table />
    </div>
  )
}

export default App
