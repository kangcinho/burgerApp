import React from 'react'

import classes from './NavigationItem.css'

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a 
        href={props.url}
        className={props.active ? classes.active : null}
        >
          {props.urlLabel}
        </a>
    </li>
  )
}

export default NavigationItem;