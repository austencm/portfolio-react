import React from 'react'

export default class Window extends React.Component {
  updateEvents() {
    Object.entries(this.props.events).forEach(([event, listener]) => {
      window.addEventListener(event, listener, false)
    })
  }

  detachEvents() {
    Object.entries(this.props.events).forEach(([event, listener]) => {
      window.removeEventListener(event, listener)
    })
  }

  componentDidMount() {
    this.updateEvents()
  }

  componentWillUnmount() {
    this.detachEvents()
  }

  render() {
    return null
  }
}
