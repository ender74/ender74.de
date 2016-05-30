import React, { Component } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'

import ResumeLayout from './ResumeLayout'
import About from './About'
import Basics from './Basics'
import Education from './Education'
import Location from './Location'
import Profiles from './Profiles'
import Publications from './Publications'
import LanguageSkills from './LanguageSkills'
import Skills from './Skills'
import Work from './Work'

class Resume extends Component {
  render() {
    const { data } = this.props

    if (!data)
        return <div>Lade Daten ...</div>

    const { basics, education, work, skills, languages, publications } = data

    return (
      <ResumeLayout data={data}>
        <Row className='hide-when-printing'>
            <Col sm={12}>
                <div style={ style.entry }>
                    <About basics={basics} />
                </div>
            </Col>
        </Row>
        <Row className='hide-when-printing'>
            <Col sm={12}>
                <Location location={basics.location} />
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <div style={ style.entry }>
                    <Basics basics={basics} />
                </div>
                <div className='hide-when-printing' style={ style.entry }>
                    <Profiles profiles={basics.profiles} />
                </div>
                <Education education={education} />
            </Col>
            <Col sm={6}>
                <Work work={work} style={{height: '100%'}}/>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <LanguageSkills languages={languages} />
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Skills skills={skills} />
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Publications publications={publications} />
            </Col>
        </Row>
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