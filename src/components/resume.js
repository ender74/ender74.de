import React from 'react'
import About from './about'
import Contact from './contact'
import Education from './education'
import Footer from './footer'
import Location from './location'
import Profiles from './profiles'
import Publications from './publications'
import Skills from './skills'
import Title from './title'
import Work from './work'

const Resume = React.createClass({
  render: function () {
    var style = {
        width: '100%',
        background: 'white',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        fontSize: '1.0em'
    }
    return (
      <div style={style}>
        <Title basics={this.props.data.basics} />
        <About basics={this.props.data.basics} />
        <Contact basics={this.props.data.basics} />
        <Location location={this.props.data.basics.location} />
        <Education education={this.props.data.education} />
        <Publications publications={this.props.data.publications} />
        <Skills skills={this.props.data.skills} />
        <Profiles profiles={this.props.data.basics.profiles} />
        <Work work={this.props.data.work} />
        <Footer basics={this.props.data.basics} />
      </div>
    )
  }
})

export default Resume