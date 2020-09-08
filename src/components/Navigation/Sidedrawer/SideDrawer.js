
import React from 'react'

import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

const SideDrawer = (props) => {
  let classesShowSidebar = [classes.SideDrawer, classes.Close]
  if(props.open){
    classesShowSidebar = [classes.SideDrawer, classes.Open]
  }

  return (
    <Auxiliary>
      <Backdrop show={props.open} backdropClicked={props.backdropClicked}/>
      <div className={classesShowSidebar.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  )
}

export default SideDrawer