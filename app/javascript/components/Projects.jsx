import React from 'react'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const Project=({project})=>(<div className="project" style={{backgroundImage: `url('${project.image}')`}}>
      <div className="overlay"></div>
      <h2>{project.title}</h2>
      <p>{project.overview}</p>
      <div className='view-text-wrapper'>
        <a href={`/projects/${project.slug}`} className='view-text action-btn'>View case study</a>
      </div>
    </div>)

    const { projects } = this.props

    const projectList = projects.map(project=><Project project={project}/>)

    return (
      <div id="projects">
        {projectList}
      </div>
    )
  }
}
