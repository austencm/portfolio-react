import React from 'react'

export default class Body extends React.Component {
  updateStyles() {
    Object.assign(document.body.style, this.props.styles)
  }

  removeStyles() {
    Object.entries(this.props.styles).forEach(([key, val]) => {
      document.body.style.removeProperty(key)
    })
  }

  componentDidMount() {
    this.updateStyles()
  }

  componentWillUnmount() {
    this.removeStyles()
  }

  render() {
    return null
  }
}
