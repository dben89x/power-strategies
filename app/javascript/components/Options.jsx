import React from 'react'
import ContactForm from './ContactForm'
import $ from 'jquery'

export default class Options extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      construction: false,
      upgrade: false,
      other: false,
      otherText: ''
    }
  }

  chooseOption=(e)=>{
    var target = e.target
    this.setState({[target.id]: !this.state[target.id]}, ()=>{
      this.props.optionsUpdated(this.state)
    })
  }

  confirmOptions=(e)=>{
    e.preventDefault()
    $('.options-container').first().fadeOut(300, ()=>{
      $('#contact-form-wrapper').fadeIn(300)
    })
  }
  inputChange=(e)=>{
    var target = e.target
    this.setState({otherText: target.value}, ()=>{
      this.props.optionsUpdated(this.state)
    })
  }

  render() {
    return (
      <div className="content">
        <hr/>
        <div className="options-container">
          <h3>Which of the following best describes your business?</h3>
          <p>Please select all that apply</p>
          <div className="options">
            <div id='construction' className={`option ${this.state.construction ? 'selected' : ''}`} onClick={this.chooseOption}>
              <span id='construction' className='cancel-btn' onClick={this.chooseOption}>&times;</span>
              New Construction
            </div>
            <div id='upgrade' className={`option ${this.state.upgrade ? 'selected' : ''}`} onClick={this.chooseOption}>
              <span id='upgrade' className='cancel-btn' onClick={this.chooseOption}>&times;</span>
              Ready for an Upgrade
            </div>
            <div id='other' className={`option ${this.state.other ? 'selected' : ''}`} onClick={this.chooseOption}>
              <span id='other' className='cancel-btn' onClick={this.chooseOption}>&times;</span>
              Other
              <input type="text" placeholder='Please specify' onChange={this.inputChange} className={`other-input ${this.state.other ? 'visible' : 'hidden'}`}/>
            </div>
          </div>
          {/* <a href={`mailto:stephanie@powerstrategies.co?subject=Help%20me%20with%20my%20business!&body=My%20needs%20are:%20${this.state.construction ? 'New construction, ' : ''}${this.state.upgrade ? 'Ready for upgrade, ' : ''}${this.state.other ? this.state.otherText : ''}`} className={`action-btn brand-btn ${this.state.construction || this.state.upgrade || this.state.other ? 'active' : 'inactive'}`} onClick={this.confirmOptions}>That's me</a> */}
          <a href='' className={`action-btn brand-btn ${this.state.construction || this.state.upgrade || this.state.other ? 'active' : 'inactive'}`} onClick={this.confirmOptions}>That's me</a>
        </div>
        <ContactForm construction={this.state.construction} upgrade={this.state.upgrade} other={this.state.other} otherText={this.state.otherText}/>
      </div>
    )
  }
}
