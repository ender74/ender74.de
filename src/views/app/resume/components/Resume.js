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
        <div style={ style.entry }>
            <About basics={this.props.basics} />
        </div>
        <div style={ style.entry }>
            <Contact basics={this.props.basics} />
        </div>
        <div className='hide-when-printing'>
            <Location location={this.props.basics.location} />
        </div>
        <div style={ style.entry }>
            <Profiles profiles={this.props.basics.profiles} />
        </div>
        <Work work={this.props.work} />
        <Education education={this.props.education} />
        <Publications publications={this.props.publications} />
        <Skills skills={this.props.skills} />
      </ResumeLayout>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}

export default Resume
module.exports = Resume