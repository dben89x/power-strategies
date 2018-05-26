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
    this.setState({[target.id]: !this.state[target.id]})
  }

  confirmOptions=()=>{
    var otherText = $('#other input').first().val()
    this.setState({otherText: otherText}, ()=>{
      $('.options-container').first().fadeOut(300)
    })
  }

  render() {
    return (
      <div className="content">
        <hr/>
        <div className="options-container">
          <h2>Which of the following best describes your business?</h2>
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
              <input type="text" placeholder='Please specify' className={this.state.other ? 'visible' : 'hidden'}/>
            </div>
          </div>
          <a className={`action-btn brand-btn ${this.state.construction || this.state.upgrade || this.state.other ? 'active' : 'inactive'}`} onClick={this.confirmOptions}>That's me</a>
        </div>
        <ContactForm construction={this.state.construction} upgrade={this.state.upgrade} other={this.state.other} otherText={this.state.otherText}/>
      </div>
    )
  }
}
