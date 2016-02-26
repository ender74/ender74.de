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
      <ResumeLayout data={this.props}>
        <About basics={this.props.basics} />
        <Contact basics={this.props.basics} />
        <Location location={this.props.basics.location} />
        <Education education={this.props.education} />
        <Publications publications={this.props.publications} />
        <Skills skills={this.props.skills} />
        <Profiles profiles={this.props.basics.profiles} />
        <Work work={this.props.work} />
      </ResumeLayout>
    )
  }
}

export default Resume
module.exports = Resume