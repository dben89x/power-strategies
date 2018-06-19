import React from 'react'
import $ from 'jquery'
const $window = $(window)

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.navHeight = 0
    this.state = {
      year: new Date().getFullYear(),
      opened: false,
      navClass: this.props.navClass
    }
  }

  menuClick = e => {
    e.preventDefault()
    this.toggleMenu()
  }

  toggleMenu = e => {
    this.setState({
      opened: !this.state.opened
    }, () => {
      this.state.opened ? this.openMenu() : this.closeMenu()
    })
  }

  openMenu = () =>{
    $('.nav-overlay').fadeToggle(200)
  }

  closeMenu = () =>{
      $('.nav-overlay').fadeToggle(200)
  }

  toggleAndGoToAnchor = e =>{
  }

  render() {
    // const {navClass} = this.props

    return (<div className='nav-padding'>
      <div className='nav-overlay'>
        <div className='page-links'>
          <a href="/">Home</a>
          <a href="/about">Who We are</a>
          <a href="/our-services">what we do</a>
          <a href="/our-projects">projects & partners</a>
          <a href="/publications">publications</a>
          <a href="mailto:stephanie@powerstrategies.co">contact us</a>
        </div>
      </div>
      <nav className={`navbar navbar-fixed-top ${this.state.navClass}` } id='nav'>
        <div className="navbar-header">
          <a className={`nav-menu ${this.state.opened ? 'opened' : ''}`} onClick={this.menuClick}>
            <span className='lines'></span>
          </a>
        </div>
        <div id="navbar">
          <div className="nav-links">
            <div className="left">
              <div className="section-container">
                <a href="/">Home</a>
                <a href="/about">Who We are</a>
                <a href="/our-services">what we do</a>
              </div>
            </div>
            <div className="middle">
              <div className="section-container">
                {/* <a href="#"} className='logo'><img src="https://s3-us-west-1.amazonaws.com/logo.png" alt="Power Strategies"/></a> */}
                <a href="#" className='logo'><img src="https://s3.amazonaws.com/power-strategies/logo.png" alt="powerstrategies"/></a>
              </div>
            </div>
            <div className="right">
              <div className="section-container">
                <a href="/our-projects">projects & partners</a>
                <a href="/publications">publications</a>
                <a href="mailto:stephanie@powerstrategies.co">contact us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>)
  }
}
