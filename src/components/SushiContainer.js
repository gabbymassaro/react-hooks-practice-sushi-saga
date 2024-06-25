import React from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ currentSushi, handleNextSushi, handleEaten }) {
  return (
    <div className="belt">
      {currentSushi.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} handleEaten={handleEaten} />
      ))}
      <MoreButton
        currentSushi={currentSushi}
        handleMoreSushi={handleNextSushi}
      />
    </div>
  )
}

export default SushiContainer
