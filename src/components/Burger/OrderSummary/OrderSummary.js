import React, {Component} from 'react'

import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.rerender){
  //     console.log("[OrderSummary.js] shouldComponentUpdate", nextProps.rerender)
  //     return true
  //   }
  //   console.log("[OrderSummary.js] shouldComponentUpdate", nextProps.rerender)
  //   return false
  // }

  render(){
    console.log("[OrderSummary.js] Render")
    const topingLists = Object.keys(this.props.topings)
      .map( (topingKey) => {
        return (
          <li key={topingKey}>
            <span style={{textTransform: 'capitalize'}}>{topingKey}: </span> {this.props.topings[topingKey]}
          </li>
        )
      })
    return (
      <Auxiliary>
        <p>Order Summary Burger With Topings: </p>
        <ul>
          {topingLists}
        </ul>
        <p>Total Price: <strong>${this.props.price}</strong></p>
        <p>Continue to Order?</p>
        <Button btnType="Danger" clicked={() => this.props.purchasingOrder(false)}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchasingContinue}>Continue</Button>
      </Auxiliary>
    )
  }
}

export default OrderSummary;