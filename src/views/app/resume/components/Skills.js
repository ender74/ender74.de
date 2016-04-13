import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Tags from './Tags'

class SkillEntry extends Component {
  render() {
    return (
      <div className="skillEntry">
        <h4>{this.props.name}</h4>
        <Tags title="" tags={this.props.keywords} />
      </div>
    )
  }
}

class Skills extends Component {
  render() {
    const skills = this.props.skills.map(function (skill, index) {
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
}

export default Skills