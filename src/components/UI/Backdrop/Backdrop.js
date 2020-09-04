import React, { useContext } from 'react'

import classes from './Backdrop.css'
import TopingsContext from '../../../context/TopingsContext'

const Backdrop = (props) => {
  const topingContext = useContext(TopingsContext);

  return (
    props.show ? <div className={classes.Backdrop} onClick={() => topingContext.purchasingOrder(false)}></div> : null
  )
}

export default Backdrop;