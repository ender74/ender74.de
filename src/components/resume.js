import React from 'react'
import About from './about'
import Contact from './contact'
import Education from './education'
import Location from './location'
import Profiles from './profiles'
import Publications from './publications'
import ResumeLayout from './resumeLayout'
import Skills from './skills'
import Work from './work'

const Resume = React.createClass({
  render: function () {
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
})

export default Resume