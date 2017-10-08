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
            <MoonLink to="https://stackoverflow.com/users/689186/austen" label="Stack Overflow" color="#222426" background="#222426">
              <Icon name="stack-overflow" style={{ display: 'block', transform: 'scale(1.3, 1.2) translateY(-0.1vw)' }} />
            </MoonLink>
          </div>
        </div>
      </section>
    )
  }
}
