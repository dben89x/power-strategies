import React from 'react'
import $ from 'jquery'
import Carousel from './Carousel'

const $window = $(window)

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (<div id="home">
      <section className="banner" id="hero-banner">
        <Carousel caseStudies={this.props.caseStudies}/>
      </section>
    </div>)
  }
}
