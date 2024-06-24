import React from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ currentSushi, handleNextSushi }) {
  return (
    <div className="belt">
      {currentSushi.map((sushi) => (
        <Sushi
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          image={sushi.img_url}
          price={sushi.price}
          created_at={sushi.created_at}
        />
      ))}
      <MoreButton
        currentSushi={currentSushi}
        handleMoreSushi={handleNextSushi}
      />
    </div>
  )
}

export default SushiContainer
