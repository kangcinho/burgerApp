import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerPresentation.css'

class BurgerPresentation extends Component {
  render() {
    let topings = null;
    switch(this.props.type){
      case ('bread-bottom'):
        topings = <div className={classes.BreadBottom}></div>
        break;

      case ('bread-top'):
        topings = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break;
      
      case ('meat'):
        topings = <div className={classes.Meat}></div>
        break;
      
      case ('cheese'):
        topings = <div className={classes.Cheese}></div>
        break;
      
      case ('salad'):
        topings = <div className={classes.Salad}></div>
        break;
      
      case ('bacon'):
        topings = <div className={classes.Bacon}></div>
        break;
      
      default:
        break;
    }
    return topings;
  }
}

BurgerPresentation.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerPresentation;
