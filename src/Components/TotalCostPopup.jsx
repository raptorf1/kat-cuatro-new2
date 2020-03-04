import React from 'react'

const TotalCostPopupOpen = (props) => {

  return (
    <p>
      Συνολικό κόστος: ${props.cost} €
      Προτεινόμενη τιμή πώλησης: ${(props.cost * 1.15).toFixed(2)} €
    </p>
  )
}

export default TotalCostPopupOpen
