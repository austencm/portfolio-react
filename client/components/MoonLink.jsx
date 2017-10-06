import React from 'react'
import styles from 'moon-link.scss'

const MoonLink = (props) => {
  let styles = {
    color: props.color,
    background: props.background,
    // boxShadow: `0 0 0.5vw rgba(0, 0, 0, 0.2)` //${props.background}`
  }

  return (
    <div className="moon">
      <a className="moon-link" aria-label={props.label} href={props.to} style={styles}>
        {props.children}
      </a>
    </div>
  )
}

export default MoonLink
