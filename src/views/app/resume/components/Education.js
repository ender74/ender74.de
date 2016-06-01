import React, { Component } from 'react'
import { injectIntl, FormattedDate, FormattedMessage } from 'react-intl'
import { Row, Col } from 'react-bootstrap'

import WithGroupHeader from '../../lib/components/withGroupHeader'
import Tags from './Tags'

class Education extends Component {
  render() {
    const { intl } = this.props
    const title = intl.formatMessage({
        id: 'resume.education',
        defaultMessage: 'education'
    })

    var education = this.props.education.map(function (education, index) {
      return (
        <EducationEntry
          key={index}
          institution={education.institution}
          area={education.area}
          studyType={education.studyType} 
          startDate={education.startDate}
          endDate={education.endDate}
          gpa={education.gpa}
          courses={education.courses}
          intl={intl}/>
      )
    })
    return (
      <WithGroupHeader title={title}>
        {education}
      </WithGroupHeader>
    )
  }
}

class EducationEntry extends Component {
  render() {
    const { intl, startDate, endDate, institution, area, courses } = this.props
    const title = intl.formatMessage({
        id: 'resume.focus',
        defaultMessage: 'Major subjects:'
    })

    let hl = ""
    let sep = ""
    for (var k of courses) {
        hl = hl + sep + k
        sep = ", "
    }

    return (
      <div style={ style.entry }>
        <Row>
            <Col sm={2}>
                <h5><FormattedDate value={new Date(startDate)}/> - <FormattedDate value={new Date(endDate)}/></h5>
            </Col>
            <Col sm={10}>
                <div style={style.text}>{institution}</div>
                <div style={style.summary}>{area}</div>
                <b>
                    <FormattedMessage
                        id='resume.focus'
                        defaultMessage='Major Subjects'
                    />:
                </b>
                &nbsp;{hl}
            </Col>
        </Row>
      </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    },
    summary: {
        textAlign: 'justify',
        paddingTop: '5px',
        paddingBottom: '5px'
    },
    text: {
        paddingTop: '7px'
    }
}

export default injectIntl(Education)