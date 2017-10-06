import autobind from 'autobind-decorator'
import React from 'react'
import { Link } from 'react-router-dom'
import Waypoint from 'react-waypoint'
import Icon from './Icon'
import styles from 'footer.scss'

@autobind
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <footer id="footer">
        <Waypoint onEnter={this.show} onLeave={this.hide} />
        <div className={`inner-cont ${this.state.visible ? 'visible' : ''}`}>
          <button className="to-top" onClick={this.scrollToTop}>
            <Icon name="chevron-down" />
          </button>
        </div>
        {/* <Container>
          <Row>
            <Col>
              <em>Contact me!</em>
            </Col>
            <Col>
              <button class="to-intro">Top</button>
            </Col>
            <Col>
              <div className="copyright">&copy; <span className="num">{(new Date()).getFullYear()}</span> Austen Morgan</div>
            </Col>
          </Row>
        </Container> */}
      </footer>
    )
  }
}
