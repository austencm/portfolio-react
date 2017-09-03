import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          Header
          <nav>Nav</nav>
        </Container>
      </header>
    )
  }
}
