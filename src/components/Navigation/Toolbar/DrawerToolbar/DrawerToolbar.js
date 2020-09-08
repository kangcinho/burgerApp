import React from 'react'

import classes from './DrawerToolbar.css'

const DrawerToolbar = (props) => {
  return (
    <div onClick={props.openSidebar} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToolbar;