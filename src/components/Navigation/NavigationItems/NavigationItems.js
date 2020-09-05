import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem url="#" urlLabel="Burger Builder" active/>
      <NavigationItem url="#" urlLabel="Checkout" active={false}/>
    </ul>
  )
}

export default NavigationItems;