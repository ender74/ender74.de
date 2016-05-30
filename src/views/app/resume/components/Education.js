import React, { Component } from 'react'
import { injectIntl, FormattedDate } from 'react-intl'

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
    const { intl, startDate, endDate } = this.props
    const title = intl.formatMessage({
        id: 'resume.focus',
        defaultMessage: 'major subjects:'
    })

    return (
      <div style={ style.entry }>
        <h5><FormattedDate value={new Date(startDate)}/> - <FormattedDate value={new Date(endDate)}/></h5>
        <div>{this.props.institution}</div>
        <div>{this.props.area}</div>
        <Tags title={title} tags={this.props.courses} />
      </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}


export default injectIntl(Education)