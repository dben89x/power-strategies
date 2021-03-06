import React from 'react'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {

    const Service = ({service}) => (<div className="service-item">
      <img src={service.icon} alt={service.title}/>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </div>)

    const TeamMember = ({teamMember})=>(
      <div className="team-member">
        <div className="img-wrapper">
          <img src={teamMember.image} alt={teamMember.name}/>
        </div>
        <div className="details-wrapper">
          <h3 className='name'>{teamMember.name}</h3>
          <p className='description'>{teamMember.description}</p>
        </div>
      </div>
    )

    const {aboutText, services, teamMembers} = this.props

    const servicesList = services.map((service) => (<Service service={service} key={service.key}/>))
    const teamMemberList = teamMembers.map((teamMember) => (<TeamMember teamMember={teamMember} key={teamMember.id}/>))

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
          <h2>Our services</h2>

          <div className="services-list">
            {servicesList}
          </div>
          <a href='/our-services' className="action-btn brand-btn">VIEW ALL SERVICES</a>
        </div>
      </section>
      <section className='banner cta-banner' style={{backgroundImage: "url('https://s3.amazonaws.com/power-strategies/stock/casino.jpg')"}}>
        <div className="overlay"></div>
        <h2>What Can Power Strategies Do For Your Business?</h2>
        <a className="action-btn" href="mailto:stephanie@powerstrategies.co">Get in Touch</a>
      </section>
      <section className='banner' id='team-members'>
        <h1>Our team</h1>
        <div className="team-members-list">
          {teamMemberList}
        </div>
      </section>
    </div>)
  }
}
