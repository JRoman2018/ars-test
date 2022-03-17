import React from 'react'
import style from './card.module.css'

const Card = (props) => {
  const { children } = props
  return <div className={style['rectangle-48']}>{children}</div>
}

export default Card
