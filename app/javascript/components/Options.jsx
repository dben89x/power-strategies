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
      $('html, body').animate({scrollTop: $('#survey').offset().top - $('#nav').height()})
    })
  }
  inputChange=(e)=>{
    var target = e.target
    this.setState({otherText: target.value}, ()=>{
      this.props.optionsUpdated(this.state)
    })
  }

  render() {
    const {construction, upgrade, other, otherText} = this.state
    const constructionText = 'New Construction'
    const upgradeText = 'Ready for an Upgrade'

    return (
      <div className="content">
        <hr/>
        <div className="options-container">
          <h3>Which of the following best describes your business?</h3>
          <p>Please select all that apply</p>
          <div className="options">
            <div id='construction' className={`option ${construction ? 'selected' : ''}`} onClick={this.chooseOption}>
              <span id='construction' className='cancel-btn' onClick={this.chooseOption}>&times;</span>
              {constructionText}
            </div>
            <div id='upgrade' className={`option ${upgrade ? 'selected' : ''}`} onClick={this.chooseOption}>
              <span id='upgrade' className='cancel-btn' onClick={this.chooseOption}>&times;</span>
              {upgradeText}
            </div>
            <div id='other' className={`option ${other ? 'selected' : ''}`} onClick={this.chooseOption}>
              <span id='other' className='cancel-btn' onClick={this.chooseOption}>&times;</span>
              Other
              <input type="text" placeholder='Please specify' onChange={this.inputChange} className={`other-input ${other ? 'visible' : 'hidden'}`}/>
            </div>
          </div>
          {/* <a href={`mailto:stephanie@powerstrategies.co?subject=Help%20me%20with%20my%20business!&body=My%20needs%20are:%20${construction ? 'New construction, ' : ''}${upgrade ? 'Ready for upgrade, ' : ''}${other ? otherText : ''}`} className={`action-btn brand-btn ${construction || upgrade || other ? 'active' : 'inactive'}`} onClick={this.confirmOptions}>That's me</a> */}
          <a href='' className={`action-btn brand-btn ${construction || upgrade || other ? 'active' : 'inactive'}`} onClick={this.confirmOptions}>That's me</a>
        </div>
        <ContactForm options={[construction ? constructionText : '', upgrade ? upgradeText : '', other ? (otherText ? `Other (${otherText})` : 'Other (not specified)') : '']}/>
      </div>
    )
  }
}
