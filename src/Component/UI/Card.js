import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    //   apply two classes one coming from a prop and one from CSS Modules
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card
