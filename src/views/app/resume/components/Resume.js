import React, { Component } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'

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
    const { data, locale } = this.props

    if (!data)
        return <div>Lade Daten ...</div>

    const { basics, education, work, skills, languages, publications } = data

    return (
      <ResumeLayout data={data}>
        <Row className='hide-on-screen'>
            <Col sm={12}>
                <h3 style={style.title}>
                    <FormattedMessage
                        id='resume.resume'
                        defaultMessage='Resume'
                    />
                </h3>
            </Col>
        </Row>
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
        <Row className='hide-when-printing'>
            <Col sm={6}>
                <div style={ style.entry }>
                    <Basics basics={basics} />
                </div>
            </Col>
            <Col sm={6}>
                <div style={ style.entry }>
                    <Profiles profiles={basics.profiles} />
                </div>
            </Col>
        </Row>
        <Row className='hide-on-screen'>
            <Col sm={12}>
                <div style={ style.entry }>
                    <Basics basics={basics} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <div style={ style.entry }>
                    <Education education={education} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
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
    },
    title: {
        color: 'darkGray'
    }
}

export default Resume
module.exports = Resume
