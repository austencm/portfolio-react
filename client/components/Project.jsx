import autobind from 'autobind-decorator'
import debounce from 'lodash.debounce'
import React from 'react'
// import ReactDOM from 'react-dom'
// import LazyLoad from 'react-lazy-load'
import { Container, Row, Col, Button } from 'reactstrap'
import TextSplit from 'react-text-split'
import Waypoint from 'react-waypoint'
import Window from 'Window'
import Body from 'Body'
import TagGroup from 'TagGroup'
import styles from 'project.scss'

@autobind
export default class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: new Set,
      visible: false,
      focused: false,
      open: false
    }
  }

  scrollTo() {
    document.getElementById(this.props.id).scrollIntoView()
  }

  focus() {
    this.setState((state, props) => ({
      visible: true,
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
    if (!this.state.open) {
      this.scrollTo()
    }

    this.setState((state, props) => {
      state.open = !state.open
      state.classes.has('open') ? state.classes.delete('open') : state.classes.add('open')
      return state
    })
  }

  render() {
    // const coverImagePath = `/client/projects/assets/${this.props.id}/${this.props.cover}`
    const coverImagePath = `/client/projects/assets/${this.props.id}/${this.props.cover}`

    return (
      <Waypoint onEnter={this.focus} onLeave={this.blur}>
        <section id={this.props.id} className={`project ${[...this.state.classes].join(' ')}`} data-project-id={this.props.id} tabIndex="0">
          <div className="project-cont-inner">
            <div className="project-bg"></div>
            <div className="project-screen"></div>
            { this.state.visible &&
            <div className="project-cover">
              <div className="transform-cont">
                <Container fluid={true}>
                  <Row>
                    <Col md="6" lg="6">
                      <div className="project-cover-image">
                        <div className="bevel" style={{backgroundImage: `url(${coverImagePath})`}}></div>
                        <img src={coverImagePath} title={this.props.domain} alt={`${this.props.title} website screenshot`} />
                      </div>
                    </Col>
                    <Col md="6" lg="6">
                      <div className="project-cover-right-cont">

                        <div className="project-tags">
                          <div className="transform-wrap-inner">
                            <TagGroup tags={this.props.tags} />
                          </div>
                        </div>
                        <h2 className="project-title display-2">
                          <TextSplit.LetterTextSplit text={this.props.title} />
                        </h2>
                        <div className="project-actions">
                          <div className="transform-wrap-inner">
                            { this.props.__content &&
                              <Button color="primary" size="lg" className="trigger-open" onMouseOver={this.toggleTeaseOpen} onMouseOut={this.toggleTeaseOpen} onMouseDown={this.toggleOpen}>
                                Read More <span className="caret">&gt;</span>
                              </Button>
                            }
                            <div className="project-links">
                              {this.props.domain && <a className="btn btn-secondary link-wild" href={`http://${this.props.domain}/`} target="_blank" title={this.props.domain}>Website</a> }
                              {this.props.repo && <a className="btn btn-secondary link-repo" href={`https://github.com/austencm/${this.props.repo}/`} target="_blank" title={this.props.domain}>GitHub</a> }
                            </div>
                          </div>
                        </div>
                      </div>

                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            }

            { this.props.__content &&
              <div className="project-detail">
                <div className="trigger-close">
                  <Button color="primary" size="lg" onClick={this.toggleOpen}>
                    <span className="caret">&lt;</span> Back
                  </Button>
                </div>

                <Container>
                  <Row className="justify-content-center">
                    <Col md="7" lg="8">
                      <div className="project-detail-right-cont">
                        <h3 className="project-lead display-3">{this.props.lead}</h3>
                        <div className="project-body">
                          {this.state.open &&
                            <div>
                              <div dangerouslySetInnerHTML={{__html: this.props.__content}}></div>
                              <Body styles={{ overflow: 'hidden' }} />
                              <Window events={{ resize: debounce(this.scrollTo) }} />
                            </div>
                          }
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            }
          </div>
        </section>
      </Waypoint>
    )
  }
}
