import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushi, setSushi] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [wallet, setWallet] = useState(100)
  const sushiPerPage = 4
  const currentSushi = sushi.slice(currentIndex, currentIndex + sushiPerPage)

  function handleNextSushi() {
    const nextIndex = currentIndex + sushiPerPage
    if (nextIndex < sushi.length) {
      setCurrentIndex(nextIndex)
    } else {
      setCurrentIndex(0)
    }
  }

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const initialSushi = data.map((sushiItem) => ({
          ...sushiItem,
          isEaten: false,
        }))
        setSushi(initialSushi)
      })
  }, [])

  return (
    <div className="app">
      <SushiContainer
        currentSushi={currentSushi}
        handleNextSushi={handleNextSushi}
      />
      <Table wallet={wallet} />
    </div>
  )
}

export default App
