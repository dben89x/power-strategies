import React from 'react'
import $ from 'jquery'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showOptions=()=>{
    $('#contact-form-wrapper').fadeOut(300, ()=>{
      $('.options-container').first().fadeIn(300)
    })
  }

  submitForm = e =>{
    e.preventDefault()
    console.log(this.props.options)
    var options = this.props.options.filter((option)=> !!option)
    console.log(options)
    var message = `Interested in: ${options.join(', ')}`
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
            <input type="text" name='name'/>
            <label htmlFor="email">
              Your Email Address:
            </label>
            <input type="email" name='email'/>
          </div>
          <input type="submit" value='Submit' onClick={this.submitForm}/>
        </form>
      </div>
    </div>)
  }
}
