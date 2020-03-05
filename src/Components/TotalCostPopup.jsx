import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const TotalCostPopupOpen = (props) => {

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
      <Button as='div' labelPosition='right'>
        <Button color='brown' style={{ 'cursor': 'auto' }}>
          <Icon name='user' />
          Τιμή Πελάτη
        </Button>
        <Label as='a' basic color='green' pointing='left' style={{ 'cursor': 'auto' }}>
          {(props.cost * 1.15).toFixed(2)} €
        </Label>
      </Button>
    </div>
  )
}

export default TotalCostPopupOpen
