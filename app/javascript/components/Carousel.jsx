import React from 'react'
import Slider from 'react-slick'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const SlickButton = ({
      currentSlide,
      slideCount,
      children,
      ...props
    }) => (<button {...props}>{children}</button>)

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => <ul>{dots}</ul>,
      // prevArrow: (<SlickButton><img src="https://s3.amazonaws.com/power-strategies/left-chevron.svg" alt=""/></SlickButton>),
      // nextArrow: (<SlickButton><img src="https://s3.amazonaws.com/power-strategies/right-chevron.svg" alt=""/></SlickButton>)
      prevArrow: (<SlickButton><i className='fal fa-chevron-left'/></SlickButton>),
      nextArrow: (<SlickButton><i className='fal fa-chevron-right'/></SlickButton>)
    }

    var projects = this.props.projects.map((project) => {
      return (<div className='project-container' key={project.id}>
        <img src={project.image} alt={project.title}/>
        <div className='project-overlay'></div>
        <div key={project.id} className='project-links-wrapper'>
          <a href={`/projects/${project.slug}`} className='project-name'>{project.title}</a>
          <div className='description'>{project.overview}</div>
          <div className='view-text-wrapper'>
            <a href={`/projects/${project.slug}`} className='view-text action-btn'>View case study</a>
          </div>
        </div>
      </div>)
    })

    return (<div className="projects-container">
      <Slider {...settings}>
        {projects}
      </Slider>
    </div>)
  }
}
