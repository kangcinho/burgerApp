import React from 'react'

import classes from './Button.css'

const Button = (props) => {
  const styleBtn = [classes.Button, classes[props.btnType]]
  return (
    <button
      className={styleBtn.join(' ')}
      onClick={props.clicked}
      >
      {props.children}
    </button>
  )
}

export default Button;