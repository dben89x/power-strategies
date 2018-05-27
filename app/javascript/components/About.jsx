import React from 'react'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {

    const Service = ({service}) => (<div className="service-item">
      <img src={service.icon} alt={service.title}/>
      <h2>{service.title}</h2>
      <p>{service.text}</p>
    </div>)

    const {aboutText, services} = this.props

    const servicesList = services.map((service) => (
      <Service service={service} key={service.key}/>
    ))

    return (<div id='about'>
      <section className='banner' id='hero'></section>
      <section className='banner' id='mission'></section>
      <section className='banner' id='featured'></section>
      <section className="banner" id="services">
        <div className="content">
          <h1>Our services</h1>

          <div className="services-list">
            {servicesList}
          </div>
          <a href='/services' className="action-btn brand-btn">VIEW ALL SERVICES</a>
        </div>
      </section>
    </div>)
  }
}
