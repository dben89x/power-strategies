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
      <section className='banner hero-banner' id='hero' style={{backgroundImage: "url('https://s3.amazonaws.com/power-strategies/stock/device.jpg')"}}>
        <div className="overlay"></div>
        <h1>Making the complex simple</h1>
      </section>
      <section className='banner' id='mission'>
        <div className="content">
          <p>{aboutText.mission.paragraphs[0]}</p>
          <p>{aboutText.mission.paragraphs[1]}</p>
        </div>
      </section>
      <section className='banner' id='featured'>
        <div className="left">
          <img src="https://s3.amazonaws.com/power-strategies/stock/stephanie.jpg" alt="stephanie-maddocks"/>
        </div>
        <div className="right">
          <h2>Meet Stephanie Maddocks</h2>
          <p>{aboutText.featured.paragraphs[0]}</p>
          <p>{aboutText.featured.paragraphs[1]}</p>
          <p>{aboutText.featured.paragraphs[2]}</p>
        </div>
      </section>
      <section className="banner" id="services">
        <div className="content">
          <h1>Our services</h1>

          <div className="services-list">
            {servicesList}
          </div>
          <a href='/services' className="action-btn brand-btn">VIEW ALL SERVICES</a>
        </div>
      </section>
      <section className='banner cta-banner' style={{backgroundImage: "url('https://s3.amazonaws.com/power-strategies/stock/casino.jpg')"}}>
        <div className="overlay"></div>
        <h2>What Can Power Strategies Do For Your Business?</h2>
        <a className="action-btn" href="/contact">Get in Touch</a>
      </section>
    </div>)
  }
}
