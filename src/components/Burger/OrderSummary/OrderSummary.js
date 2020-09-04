import React from 'react'

import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'


const OrderSummary = (props) => {
  
  const topingLists = Object.keys(props.topings)
    .map( (topingKey) => {
      return (
        <li key={topingKey}>
          <span style={{textTransform: 'capitalize'}}>{topingKey}: </span> {props.topings[topingKey]}
        </li>
      )
    })
  return (
    <Auxiliary>
      <p>Order Summary Burger With Topings: </p>
      <ul>
        {topingLists}
      </ul>
      <p>Total Price: <strong>${props.price}</strong></p>
      <p>Continue to Order?</p>
      <Button btnType="Danger" clicked={() => props.purchasingOrder(false)}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchasingContinue}>Continue</Button>
    </Auxiliary>
  )
}

export default OrderSummary;