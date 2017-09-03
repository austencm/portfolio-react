import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styles from 'project.scss'

export default class Project extends React.Component {
  render() {
    console.log(styles)
    return (
      <Container className="project">
        <Row>
          <Col md="4">
            <div className="project-cover-image" style={{ backgroundImage: `url(/client/projects/assets/${this.props.cover})`}}></div>
          </Col>
          <Col md="8">
            <div className="project-body" dangerouslySetInnerHTML={{__html: this.props.__content}}></div>
          </Col>
        </Row>
      </Container>
    )
  }
}
