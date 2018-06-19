import React from 'react'
import $ from 'jquery'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }

  showOptions=()=>{
    $('#contact-form-wrapper').fadeOut(300, ()=>{
      $('.options-container').first().fadeIn(300)
      $('html, body').animate({scrollTop: $('#survey').offset().top - $('#nav').height()})
    })
  }

  inputChange = e => {
    var target = e.target
    this.setState({[target.name]: target.value})
  }

  submitForm = e => {
    e.preventDefault()

    const {name, email} = this.state
    var options = this.props.options.filter((option)=> !!option)
    var message = `Interested in:\n ${options.join('\n ')}`
    $.post('/requests', {
      request: {
        name: name,
        email: email,
        message: message
      }
    }).done((data) => {
    })
  }

  render() {

    return (<div id='contact-form-wrapper' className='flex col center'>
      <div id='contact-form' className='flex col center'>
        <form action="contact_request" className='flex col center'>
          <span className='close-btn' onClick={this.showOptions}>&times;</span>
          {/* <span className='fal fa-arrow-left back-btn' onClick={this.showOptions}></span> */}
          <h2>Almost there!</h2>
          <div className="inputs-container">
            <label htmlFor="text">
              Your name:
            </label>
            <input type="text" name='name' onChange={this.inputChange}/>
            <label htmlFor="email">
              Your Email Address:
            </label>
            <input type="email" name='email' onChange={this.inputChange}/>
          </div>
          <input type="submit" value='Submit' onClick={this.submitForm}/>
        </form>
      </div>
    </div>)
  }
}
