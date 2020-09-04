import React from 'react'

import classes from './BurgerPurchaseOrders.css'
import BurgerPurchaseOrder from './BurgerPurchaseOrder/BurgerPurchaseOrder'

const topingsPurchaseOrders = [
  {
    label: 'Salad', type: "salad"
  },
  {
    label: 'Meat', type: "meat"
  },
  {
    label: 'Cheese', type: "cheese"
  },
  {
    label: 'Bacon', type: "bacon"
  },
]

const BurgerPurchaseOrders = (props) => {
  return (
    <div className={classes.BurgerPurchaseOrders}>
      <p>Current Price : <strong>${props.price}</strong></p>
      {
        topingsPurchaseOrders.map((toping, index) => {
          return <BurgerPurchaseOrder 
            label={toping.label} 
            key={toping.type} 
            type={toping.type}/>
        })
      }
      <button 
        className={classes.OrderButton}
        disabled={props.disablePurchase}
        onClick={props.purchasingOrder.bind(true)}
        >ORDER NOW</button>
    </div>
  )
}

export default BurgerPurchaseOrders;