import React, { Component } from 'react'

import Auxiliary from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/Sidedrawer/SideDrawer'
import classes from './Layout.css'


class Layout extends Component {
  state = {
    sideDrawer: false
  }
  
  toggleSideDrawer = (value) => {
    this.setState({
      sideDrawer: value
    })
    console.log('ToggleSideDrawer')
  }

  render(){
    console.log("[Layout.js] Render")
    return (
      <Auxiliary>
        <Toolbar openSidebar={this.toggleSideDrawer}/>
        <SideDrawer open={this.state.sideDrawer} backdropClicked={this.toggleSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}

export default Layout;