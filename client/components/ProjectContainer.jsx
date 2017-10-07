import React from 'react'
import Project from 'Project'

function requireDir(r) {
  let store = {}

  r.keys().forEach(key => store[key] = r(key))
  return store
}

// Fetch projects map
var projects = requireDir( require.context('../projects/data') )

// Convert to array and sort by priority desc
projects = Object.values(projects).sort((a, b) => a.priority < b.priority)
projects = projects.map(p => {
  p.__content = p.__content.trim()
  // Make all links open in new window
  p.__content = p.__content.replace(/<a href=/g, '<a target="_blank" href=')
  // Add full image URLs
  p.__content = p.__content.replace(/{{assets}}/g, `/client/projects/assets/${p.id}`)
  // Replace domain placeholders
  if (p.domain)
    p.__content = p.__content.replace(/{{domain}}/g, p.domain)
  // Replace repo placeholders
  if (p.repo)
    p.__content = p.__content.replace(/{{repo}}/g, `https://github.com/austencm/${p.repo}`)
  // Wrap images in figure tags and copy the alt text into the caption
  p.__content = p.__content.replace(/<img(.+?)alt="(.+?)">/g,
                            '<figure><img$1alt="$2" title="$2"><figcaption>$2</figcaption></figure>')

  return p
})

require.context('../projects/assets', true)


export default class ProjectsContainer extends React.Component {
  constructor() {
    super()

    this.projects = projects
  }

  render() {
    return (
      <div id="projects-cont">
        {this.projects.map(p => <Project key={p.id} {...p} />)}
      </div>
    )
  }
}
