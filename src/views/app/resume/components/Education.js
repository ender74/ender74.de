import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Tags from './Tags'

class Education extends Component {
  render() {
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
          courses={education.courses}/>
      )
    })
    return (
      <WithGroupHeader title='Ausbildung'>
        {education}
      </WithGroupHeader>
    )
  }
}

class EducationEntry extends Component {
  render() {
    return (
      <div style={ style.entry }>
        <h5>{this.props.startDate} - {this.props.endDate}</h5>
        <div>{this.props.institution}</div>
        <div>{this.props.area}</div>
        <Tags title="Schwerpunkte" tags={this.props.courses} />
      </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}


export default Education