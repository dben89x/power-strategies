import React from 'react'
import Carousel from './Carousel'
import Options from './Options'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (<div id="home">
      <section className="banner" id="hero-banner">
        <Carousel caseStudies={this.props.caseStudies}/>
      </section>
      <section className="banner" id="trusted-by">
        <div className="content">
          <h1>TRUSTED BY</h1>
          <p>A few of the notable commercial clients that Power Strategies has had the pleasure of working with.</p>
          <div className="trust-list">
            <div className="trust-item">
              <img src="assets/trusted/aliante.png" alt="aliante"/>
            </div>
            <div className="trust-item">
              <img src="assets/trusted/gli.png" alt="gli"/>
            </div>
            <div className="trust-item">
              <img src="assets/trusted/cherokee-black.png" alt="cherokee"/>
            </div>
          </div>
        </div>
      </section>
      <section className='banner' id='mission' style={{backgroundImage: "url('assets/stock/casino.jpg')"}}>
        <div className="overlay"></div>
        <div className="content">
          <img src="assets/icons/cards-full.png" alt=""/>
          <h2>Power Strategies</h2>
          <p>We specialize in technology and operations for the casino gaming industry. Simply, your success is our primary concern. Contact us today to learn how we make the complex simple.</p>
        </div>
      </section>
      <section className="banner" id="services">
        <div className="content">
          <h1>Our services</h1>
          <div className="services-list">
            <div className="service-item">
              <img src="assets/icons/lucky-sevens.png" alt="Casino Operations & Design"/>
              <h2>Casino Operations & Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper, dolor consequat hendrerit fringilla, orci massa pretium quam, in scelerisque mi elit nec massa.</p>
            </div>
            <div className="service-item">
              <img src="assets/icons/planning.png" alt="Project Planning & Impementation"/>
              <h2>Project Planning & Impementation</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper, dolor consequat hendrerit fringilla, orci massa pretium quam, in scelerisque mi elit nec massa.</p>
            </div>
            <div className="service-item">
              <img src="assets/icons/analysis.png" alt="Results Oriented Analysis"/>
              <h2>Results Oriented Analysis</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper, dolor consequat hendrerit fringilla, orci massa pretium quam, in scelerisque mi elit nec massa.</p>
            </div>
          </div>
          <a href='/services' className="action-btn brand-btn">VIEW ALL SERVICES</a>
        </div>
      </section>
      <section className="banner" id="survey">
        <Options/>
      </section>
    </div>)
  }
}
