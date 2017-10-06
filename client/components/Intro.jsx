// import autobind from 'autobind-decorator'
import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import MoonLink from './MoonLink'
import styles from 'intro.scss'

// @autobind
export default class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className="bg-fill"></div>
        <div className="bg-radial"></div>
        <div className="bg-radial"></div>

        <div id="planet">
          <div className="planet-content">
            <h1 id="name">AM</h1>
            <div>
              <Link to="/portfolio" className="btn btn-dark">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="orbit-cont">
            <MoonLink to="https://linkedin.com/in/austencm" label="LinkedIn" color="#fff" background="#0077b5">
              <Icon name="linkedin" />
            </MoonLink>
            <MoonLink to="https://github.com/austencm" label="GitHub" color="#333" background="#f5f5f5">
              <Icon name="git" />
            </MoonLink>
            <MoonLink to="mailto:heyausten@gmail.com" label="Email" color="#fff" background="#c54da7">
              <Icon name="at" />
            </MoonLink>
          </div>
        </div>
      </section>
    )
  }
}
