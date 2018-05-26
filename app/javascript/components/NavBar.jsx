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
    $('.nav-overlay').fadeToggle(200, () => {
      $('.application-container').fadeToggle(0)
    })
  }

  closeMenu = () =>{
    $('.application-container').fadeToggle(0, () => {
      $('.nav-overlay').fadeToggle(200, ()=>{
      })
    })
  }

  toggleAndGoToAnchor = e =>{
  }

  goToAnchor = e => {
    e.preventDefault()
  }

  render() {
    // const {navClass} = this.props

    return (<div>
      <div className='nav-overlay'>
        <div className='page-links'>
        </div>
      </div>
      <nav className={`navbar navbar-fixed-top ${this.state.navClass}`}>
        <div className="navbar-header">
          <a href="#" className="navbar-toggle navbar-brand" onClick={this.goToAnchor}>
            <img src="https://s3-us-west-1.amazonaws.com/logo.png" alt="Power Strategies"/>
          </a>
          <a href="" className={`nav-menu ${this.state.opened ? 'opened' : ''}`} onClick={this.menuClick}>
            <span className='lines'></span>
          </a>
        </div>
        <div id="navbar">
          <div className="nav-links">
            <div className="left">
              <div className="section-container">
                <a href="/" onClick={this.goToAnchor}>Home</a>
                <a href="/who-we-are" onClick={this.goToAnchor}>Who We are</a>
                <a href="/what-we-do" onClick={this.goToAnchor}>what we do</a>
              </div>
            </div>
            <div className="middle">
              <div className="section-container">
                {/* <a href="#" onClick={this.goToAnchor} className='logo'><img src="https://s3-us-west-1.amazonaws.com/logo.png" alt="Power Strategies"/></a> */}
                <a href="#" onClick={this.goToAnchor} className='logo'>LOGO</a>
              </div>
            </div>
            <div className="right">
              <div className="section-container">
                <a href="/projects-partners" onClick={this.goToAnchor}>projects & partners</a>
                <a href="/publications" onClick={this.goToAnchor}>publications</a>
                <a href="/contact-us" onClick={this.goToAnchor}>contact us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>)
  }
}
