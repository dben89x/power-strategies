import React from 'react'

export default class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {

    const ServiceText = (props) => (<div className="service-text">
      <img src={props.service.icon} alt={props.service.title}/>
      <h2>{props.service.title}</h2>
      <p>{props.service.overview}</p>
      {props.children}
    </div>)

    const {services} = this.props

    return (<div id='our-services'>
      <section className='banner hero-banner' id='hero'>
        <div className="overlay"></div>
        <h1>Our services</h1>
        <p>Power Strategies oversees the technology implementation process for a variety of technology systems, including casino management systems, financial systems, and human resources information systems.  We develop casino operations plans and logistics and support your organization during transition and growth.</p>
      </section>
      <section className="banner" id="services">
        <div className="service ltr">
          <div className="left" style={{backgroundImage: 'url("https://s3.amazonaws.com/power-strategies/stock/cash-operations.jpg")'}}>
          </div>
          <div className="right">
            <ServiceText service={services[0]}>
              <div className="bullet-list split">
                <p>Some of the services we designed include the following operational support services:</p>
                <ul>
                  <li>Gaming floor layout design, game placement, and signage development.</li>
                  <li>Identify client’s system, business, and regulatory requirements by department and cross-functional areas.</li>
                  <li>Develop job descriptions, and operational, technical, and guest service training classes for operations teams.</li>
                </ul>
                <ul>
                  <li>Create Minimum Internal Control Standards and Policy and Procedure documentation for operational and regulatory compliance.</li>
                  <li>Design Request for Proposal (RFP) documents, monitor vendor product demonstrations and communications, develop scoring methodologies, and create executive analysis and review reports and presentations.</li>
                </ul>
              </div>
              <p>Additionally, we recommend quarterly and annual reviews to assess on-going operations, both for financial performance and operational efficiency.</p>
            </ServiceText>
          </div>
        </div>
        <div className="service rtl">
          <div className="left">
            <ServiceText service={services[1]}>
              <div className="bullet-list full">
                <ul>
                  <li>Organize and manage project implementation plans for technology installations, upgrades, and migrations.</li>
                  <li>Evaluate technology regulatory compliance, incorporating technology systems configuration and operational audits.</li>
                  <li>Technology Software System Design, Selection, Configuration, and Implementation</li>
                </ul>
                <p>Throughout the project lifecycle, our team works closely with your company and selected vendors to ensure a successful solution implementation from launch to completion.  We are able to manage the project so your team members can focus on their daily jobs.</p>
                <ul>
                  <li>Project Management</li>
                  <li>Vendor Communication and Relationship Management</li>
                  <li>Technical Documentation and Analysis Reporting</li>
                </ul>
                <p>Once you’ve installed your systems, we also provide post-installation support and services to ensure your business is operating at peak performance.</p>
                <ul>
                  <li>Custom Report Creation</li>
                  <li>System Configuration and User Permissions Review</li>
                  <li>System Operational Audits</li>
                </ul>
              </div>
            </ServiceText>
          </div>
          <div className="right" style={{backgroundImage: 'url("https://s3.amazonaws.com/power-strategies/stock/project-planning.jpg")'}}>
          </div>
        </div>
        <div className="service ltr">
          <div className="left" style={{backgroundImage: 'url("https://s3.amazonaws.com/power-strategies/stock/analysis.jpg")'}}>
          </div>
          <div className="right">
            <ServiceText service={services[2]}>
              <div className="bullet-list split">
                <ul>
                  <li>Create gap analyses for current operations, proposed operations, and proposed solutions.</li>
                  <li>Staffing models and labor efficiency analysis.</li>
                  <li>Gaming performance analysis and gaming database audit.</li>
                  <li>Bonusing and promotional marketing impact review.</li>
                </ul>
                <ul>
                  <li>Perform post project analyses to assess project success and document lessons learned.</li>
                  <li>Evaluate technology regulatory compliance, incorporating technology systems configuration and operational audits.</li>
                  <li>Vendor contract review.</li>
                </ul>
              </div>
              <p>We advocate in-depth quarterly and annual reviews to assess on-going operations, both for financial performance and operational efficiency.</p>
            </ServiceText>
          </div>
        </div>
      </section>
      <section className='banner cta-banner'>
        <div className="overlay"></div>
        <h2>What Can Power Strategies Do For Your Business?</h2>
        <a className="action-btn" href="mailto:stephanie@powerstrategies.co">Get in Touch</a>
      </section>
    </div>)
  }
}
