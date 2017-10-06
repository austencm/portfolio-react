import React from 'react'
// import Vivus from 'vivus'

const Icon = props => {
  return (
    <svg className={`icon icon-${props.name}`}>
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}

export default Icon
