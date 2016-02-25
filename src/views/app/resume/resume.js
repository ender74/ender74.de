import React, { Component } from 'react'
import ResumeLayout from './resumeLayout'
import About from './components/about'
import Contact from './components/contact'
import Education from './components/education'
import Location from './components/location'
import Profiles from './components/profiles'
import Publications from './components/publications'
import Skills from './components/skills'
import Work from './components/work'

class Resume extends Component {
  render() {
    return (
      <ResumeLayout data={this.props.data}>
        <About basics={this.props.data.basics} />
        <Contact basics={this.props.data.basics} />
        <Location location={this.props.data.basics.location} />
        <Education education={this.props.data.education} />
        <Publications publications={this.props.data.publications} />
        <Skills skills={this.props.data.skills} />
        <Profiles profiles={this.props.data.basics.profiles} />
        <Work work={this.props.data.work} />
      </ResumeLayout>
    )
  }
}

export default Resume
module.exports = Resume