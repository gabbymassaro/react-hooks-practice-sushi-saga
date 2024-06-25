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

  function handleEaten(id) {
    const newEats = sushi.map((item) => {
      if (item.id === id) {
        if (item.price <= wallet) {
          const newWallet = wallet - item.price
          setWallet(newWallet)
          return {
            ...item,
            isEaten: true,
          }
        }
      }
      return item
    })
    setSushi(newEats)
  }

  const plates = sushi.filter((item) => item.isEaten && item.price <= wallet)

  return (
    <div className="app">
      <SushiContainer
        currentSushi={currentSushi}
        handleNextSushi={handleNextSushi}
        handleEaten={handleEaten}
      />
      <Table wallet={wallet} plates={plates} />
    </div>
  )
}

export default App
