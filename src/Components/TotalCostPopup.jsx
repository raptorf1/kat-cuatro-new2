import React, { useState } from 'react'
import { Button, Icon, Label, Input } from 'semantic-ui-react'

const TotalCostPopupOpen = (props) => {

  const [discount, setDiscount] = useState('')

  const customerPrice = props.cost * 1.15
  const customerPriceAfterDiscount = (customerPrice - (customerPrice * (discount / 100))).toFixed(2)

  return (
    <div
      style={{ 'textAlign': 'center' }}>
      <Button as='div' labelPosition='right'>
        <Button color='teal' style={{ 'cursor': 'auto' }}>
          <Icon name='warehouse' />
          Κόστος
        </Button>
        <Label as='a' basic color='red' pointing='left' style={{ 'cursor': 'auto' }}>
          {props.cost} €
        </Label>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <Button as='div' labelPosition='right'>
        <Button color='brown' style={{ 'cursor': 'auto' }}>
          <Icon name='user' />
          Τιμή Πελάτη
        </Button>
        <Label as='a' basic color='green' pointing='left' style={{ 'cursor': 'auto' }}>
          {customerPrice.toFixed(2)} €
        </Label>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Input
        label={{ tag: true, content: customerPriceAfterDiscount }}
        labelPosition='right'
        placeholder='Έκπτωση %'
        onChange={(e) => setDiscount(e.target.value)}
      />
    </div>
  )
}

export default TotalCostPopupOpen
