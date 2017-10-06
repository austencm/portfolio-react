import React from 'react'
import styles from 'tag-group.scss'

export default class TagGroup extends React.Component {
  render() {
    return (
      <ul className="tag-group">
        {this.props.tags.map((tag, index) => <li key={index} className="tag">{tag}</li>)}
      </ul>
    )
  }
}
