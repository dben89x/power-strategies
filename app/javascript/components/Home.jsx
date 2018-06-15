import React from 'react'
import Carousel from './Carousel'
import Options from './Options'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
  }

  updateOptions =(options)=>{
    this.setState({options},()=>{
      console.log(this.state.options)
    })

  }

  render() {
    const {projects, services} = this.props
    var {options} = this.state

    const Service = ({service}) => (<div className="service-item">
      <img src={service.icon} alt={service.title}/>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </div>)

    const servicesList = services.map((service) => (
      <Service service={service} key={service.key}/>
    ))



    return (<div id="home">
      <section className="banner" id="hero-banner">
        <Carousel projects={projects}/>
      </section>
      <section className="banner" id="trusted-by">
        <div className="content">
          <h1>TRUSTED BY</h1>
          <p>A few of the notable commercial clients that Power Strategies has had the pleasure of working with.</p>
          <div className="trust-list">
            <div className="trust-item">
              <img src="https://s3.amazonaws.com/power-strategies/trusted/aliante.png" alt="aliante"/>
            </div>
            <div className="trust-item">
              <img src="https://s3.amazonaws.com/power-strategies/trusted/gli.png" alt="gli"/>
            </div>
            <div className="trust-item">
              <img src="https://s3.amazonaws.com/power-strategies/trusted/cherokee-black.png" alt="cherokee"/>
            </div>
          </div>
        </div>
      </section>
      <section className='banner' id='mission' style={{backgroundImage: "url('https://s3.amazonaws.com/power-strategies/stock/casino.jpg')"}}>
        <div className="overlay"></div>
        <div className="content">
          <img src="https://s3.amazonaws.com/power-strategies/icons/cards-full.png" alt=""/>
          <h2>Power Strategies</h2>
          <p>We specialize in technology and operations for the casino gaming industry. Simply, your success is our primary concern. Contact us today to learn how we make the complex simple.</p>
        </div>
      </section>
      <section className="banner" id="services">
        <div className="content">
          <h2>Our services</h2>
          <div className="services-list">
            {servicesList}
          </div>
          <a href='/our-services' className="action-btn brand-btn">VIEW ALL SERVICES</a>
        </div>
      </section>
      <section className="banner" id="survey">
        <Options optionsUpdated={this.updateOptions}/>
      </section>
      <section className='banner flex row start' id='contact'>
        <div className="overlay"></div>
        <div className="content">
          <h2>Let’s Get in Touch</h2>
          <p>We specialize in helping businesses like yours strategically develop new casinos, upgrade existing ones, and solve other issues with a tactical approach.</p>
          <form action="contact_request" className='flex col start'>
            <label htmlFor="email">
              Your Email Adress:
            </label>
            <input type="email" name='email'/>
            {options.length > 0 ? <p>Your preferences:</p> : null}
            <div className="badges">
              {options.construction ? <div className="badge">New Construction</div> : null}
              {options.upgrade ? <div className="badge">Ready for an Upgrade</div> : null}
              {options.other ? <div className="badge">{options.otherText || 'Not specified'}</div> : null}
            </div>
            <input type="submit" value='Submit'/>
          </form>
        </div>

      </section>
    </div>)
  }
}
