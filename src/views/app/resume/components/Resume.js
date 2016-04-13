import React, { Component } from 'react'
import ResumeLayout from './ResumeLayout'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Location from './Location'
import Profiles from './Profiles'
import Publications from './Publications'
import Skills from './Skills'
import Work from './Work'

class Resume extends Component {
  render() {
    if (!this.props.basics)
        return <div>Lade Daten ...</div>
    return (
      <ResumeLayout data={this.props}>
        <About basics={this.props.basics} />
        <Contact basics={this.props.basics} />
        <Location location={this.props.basics.location} />
        <Profiles profiles={this.props.basics.profiles} />
        <Work work={this.props.work} />
        <Education education={this.props.education} />
        <Publications publications={this.props.publications} />
        <Skills skills={this.props.skills} />
      </ResumeLayout>
    )
  }
}

export default Resume
module.exports = Resume