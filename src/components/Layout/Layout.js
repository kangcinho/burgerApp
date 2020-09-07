import React from 'react'

import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'
import classes from './Layout.css'


const Layout = (props) => {
  return (
    <Auxiliary>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  )
}

export default Layout;