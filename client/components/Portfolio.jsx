import autobind from 'autobind-decorator'
import React from 'react'
import ProjectContainer from './ProjectContainer'
import Header from './Header'
import Footer from './Footer'


@autobind
export default class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProjectContainer />
        <Footer />
      </div>
    )
  }
}
