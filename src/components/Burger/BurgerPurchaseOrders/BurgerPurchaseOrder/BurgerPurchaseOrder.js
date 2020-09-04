import React, { useContext } from 'react'

import classes from './BurgerPurchaseOrder.css'
import TopingsContext from '../../../../context/TopingsContext'

const BurgerPurchaseOrder = (props) => {
  const topingContext = useContext(TopingsContext);

  return (
    <div className={classes.BurgerPurchaseOrder}>
        <div className={classes.Label}>{props.label}</div>
        <button 
          className={classes.Less} 
          onClick={() => topingContext.changeToping( props.type, false)}
          disabled={topingContext.disableInfo[props.type]}> Less </button>
        <button 
          className={classes.More} 
          onClick={() => topingContext.changeToping( props.type, true)}> More </button>
    </div>
  )
}

export default BurgerPurchaseOrder;