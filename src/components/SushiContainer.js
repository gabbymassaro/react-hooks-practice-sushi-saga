import React from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushi }) {
  return (
    <div className="belt">
      {sushi.map((sushi) => (
        <Sushi
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          image={sushi.img_url}
          price={sushi.price}
          created_at={sushi.created_at}
          sushi={sushi}
        />
      ))}
      <MoreButton />
    </div>
  )
}

export default SushiContainer
