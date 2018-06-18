import React from 'react'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (<div id='contact-form-wrapper' className='flex col center'>
      <div id='contact-form' className='flex col center'>
        <h2>Almost there!</h2>
        <form action="contact_request" className='flex col center'>
          <label htmlFor="email">
            Your Email Address:
          </label>
          <input type="email" name='email'/>
          <input type="submit" value='Submit'/>
        </form>
      </div>
    </div>)
  }
}
