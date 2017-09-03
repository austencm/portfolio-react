import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import style from '../style/project'

export default class Project extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Container className="project">
        <Row>
          <Col className="col-4">
            <div className="project-cover-image" style={{ backgroundImage: `url(/client/projects/assets/${this.props.cover})`}}></div>
          </Col>
          <Col className="col-8">
            <div className="project-body" dangerouslySetInnerHTML={{__html: this.props.__content}}></div>
          </Col>
        </Row>
      </Container>
    )
  }
}
