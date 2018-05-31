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
      prevArrow: (<SlickButton><img src="https://s3.amazonaws.com/power-strategies/left-chevron.svg" alt=""/></SlickButton>),
      nextArrow: (<SlickButton><img src="https://s3.amazonaws.com/power-strategies/right-chevron.svg" alt=""/></SlickButton>)
    }

    var caseStudies = this.props.caseStudies.map((caseStudy) => {
      return (<div className='case-study-container' key={caseStudy.id}>
        <img src={caseStudy.url} alt={caseStudy.title}/>
        <div className='case-study-overlay'></div>
        <div key={caseStudy.id} className='case-study-links-wrapper'>
          <a href={`/case-studies/${caseStudy.slug}`} className='case-study-name'>{caseStudy.title}</a>
          <div className='description'>{caseStudy.overview}</div>
          <div className='view-text-wrapper'>
            <a href={`/case-studies/${caseStudy.slug}`} className='view-text action-btn'>View caseStudy</a>
          </div>
        </div>
      </div>)
    })

    return (<div className="case-studies-container">
      <Slider {...settings}>
        {caseStudies}
      </Slider>
    </div>)
  }
}
