import React from 'react'
import Project from './Project'

function requireDir(r) {
  let store = {}

  r.keys().forEach(key => store[key] = r(key))
  return store
}

// Fetch projects map
var projects = requireDir( require.context('../projects/data') )
// Convert to array and sort by priority desc
projects = Object.values(projects).sort(p => p.priority).reverse()
// console.log(projects)

export default class ProjectsContainer extends React.Component {
  constructor() {
    super()
    this.projects = projects
  }

  render() {
    return (
      <div id="projects-wrap">
        {this.projects.map(p => <Project key={p.id} {...p} />)}
      </div>
    )
  }
}
