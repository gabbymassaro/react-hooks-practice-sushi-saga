import React from "react"

function Sushi({ sushi }) {
  const { id, name, img_url, price, isEaten } = sushi

  function handleOnClick() {
    console.log(sushi)
    console.log(isEaten)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        {isEaten}
        {isEaten !== false ? null : (
          <img src={img_url} alt={name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
