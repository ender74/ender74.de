import React, { Component } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'

import ResumeLayout from './ResumeLayout'
import About from './About'
import Basics from './Basics'
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
        <Row className='hide-when-printing'>
            <Col sm={12}>
                <div style={ style.entry }>
                    <About basics={this.props.basics} />
                </div>
            </Col>
        </Row>
        <Row className='hide-when-printing'>
            <Col sm={12}>
                <Location location={this.props.basics.location} />
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <div style={ style.entry }>
                    <Basics basics={this.props.basics} />
                </div>
                <div className='hide-when-printing' style={ style.entry }>
                    <Profiles profiles={this.props.basics.profiles} />
                </div>
                <Education education={this.props.education} />
            </Col>
            <Col sm={6}>
                <Work work={this.props.work} style={{height: '100%'}}/>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Skills skills={this.props.skills} />
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Publications publications={this.props.publications} />
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