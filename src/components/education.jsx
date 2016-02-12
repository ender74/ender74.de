var React = require("react")
var Tags = require("./tags.jsx")

var Education = React.createClass({
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
      );
    });
    return (
      <div className="group">
        <h2 className="groupHeader">Ausbildung</h2>
        {education}
      </div>
    );
  }
});

var EducationEntry = React.createClass({
  render: function () {
    return (
      <div className="educationEntry">
        <h3>{this.props.startDate} - {this.props.endDate}</h3>
        <div>{this.props.area}</div>
        <div>{this.props.institution}</div>
        <Tags title="Schwerpunkte" tags={this.props.courses} />
      </div>
    );
  }
});

module.exports = Education