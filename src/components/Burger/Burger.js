import React from 'react'

import classes from './Burger.css'
import BurgerPresentation from './BurgerPresentation/BurgerPresentation'
const Burger = (props) => {

  let topings = Object.keys(props.topings)
  .map( (topingKey) => {
    return [...Array(props.topings[topingKey])]
      .map( (_, index) => {
        return <BurgerPresentation type={topingKey} key={topingKey + index} />
      })
  })
  .reduce((firstIndex, nextIndex) => {
    return firstIndex.concat(nextIndex);
  });

  if(topings.length === 0){
    topings = <p>Tolong Pilih Toppingnya!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerPresentation type="bread-top" />
        {topings}
      <BurgerPresentation type="bread-bottom" />
    </div>
  )
}

export default Burger;