import React from 'react'
import ReactDOM from 'react-dom'
import LazyLoad from 'react-lazy-load'
import autobind from 'autobind-decorator'
import { Container, Row, Col, Button } from 'reactstrap'
import TextSplit from 'react-text-split'
import Waypoint from 'react-waypoint'
import styles from 'project.scss'
// import Icon from 'Icon'
import TagGroup from 'TagGroup'


@autobind
export default class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: new Set,
      focused: false,
      open: false
    }
  }

  componentDidUpdate() {
    // if (this.state.focused)
    //   ReactDOM.findDOMNode(this).focus()
  }

  focus() {
    this.setState((state, props) => ({
      focused: true,
      classes: state.classes.add('focused').add('visible')
    }))
  }

  blur() {
    this.setState((state, props) => {
      state.focused = false
      state.classes.delete('focused')
      return state
    })
  }

  toggleOpen() {
    this.setState((state, props) => {
      state.open = !state.open
      state.classes.has('open') ? state.classes.delete('open') : state.classes.add('open')
      return state
    })

    document.body.classList.toggle('no-scroll')
  }

  onWaypointEnter() {

  }

  render() {
    return (
      <div className="project-screen"></div>

      <div className="project-detail">
        <div className="trigger-close">
          <Button color="primary" size="lg" onClick={this.toggleOpen}>
            <span className="caret">&lt;</span> Back
          </Button>
        </div>

        <Container fluid="false">
          <Row className="justify-content-center">
            <Col md="7" lg="8">
              <div className="project-detail-right-cont">
                <h3 className="project-lead display-3">{this.props.lead}</h3>
                <div className="project-body" dangerouslySetInnerHTML={{__html: this.props.__content}}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
