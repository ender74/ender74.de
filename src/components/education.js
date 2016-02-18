import React from 'react'
import WithGroupHeader from './withGroupHeader'
import Tags from './tags'

const Education = React.createClass({
  render: function () {
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
})

const EducationEntry = React.createClass({
  render: function () {
    return (
      <div className="educationEntry">
        <h3>{this.props.startDate} - {this.props.endDate}</h3>
        <div>{this.props.area}</div>
        <div>{this.props.institution}</div>
        <Tags title="Schwerpunkte" tags={this.props.courses} />
      </div>
    )
  }
})

export default Education