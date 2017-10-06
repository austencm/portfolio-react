import React from 'react'

export default class Window extends React.Component {
  updateEvents() {
    console.log('updating events', this.props.events)
    Object.entries(this.props.events).forEach(([event, listener]) => {
      window.addEventListener(event, listener, false)
    })
  }

  detachEvents() {
    console.log('removing events', this.props.events)
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
