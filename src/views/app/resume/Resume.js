import React, { Component } from 'react'
import ResumeLayout from './ResumeLayout'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Location from './components/Location'
import Profiles from './components/Profiles'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Work from './components/Work'

class Resume extends Component {
  render() {
    if (!this.props.basics)
        return <div>Daten noch nicht gelade</div>
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