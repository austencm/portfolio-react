import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import styles from 'header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <header id="portfolio-header">
        <Link to="/" className="to-intro">
          <Icon name="chevron-down" />
        </Link>
      </header>
    )
  }
}
