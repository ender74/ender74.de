import React from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Tags from './tags'

const SkillEntry = React.createClass({
  render: function () {
    return (
      <div className="skillEntry">
        <h3>{this.props.name}</h3>
        <Tags title="" tags={this.props.keywords} />
      </div>
    )
  }
})

const Skills = React.createClass({
  render: function () {
    var skills = this.props.skills.map(function (skill, index) {
      return (
        <SkillEntry
          key={index}
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords} />
      )
    })
    return (
      <WithGroupHeader title='Fähigkeiten'>
        {skills}
      </WithGroupHeader>
    )
  }
})

export default Skills