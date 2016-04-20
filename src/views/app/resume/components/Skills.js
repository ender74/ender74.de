import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Tags from './Tags'

class SkillEntry extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <Tags title="" tags={this.props.keywords} />
      </div>
    )
  }
}

class Skills extends Component {
  render() {
    const skills = this.props.skills.map(function (skill, index) {
      return (
        <div key={index}>
            <SkillEntry
              name={skill.name}
              level={skill.level}
              keywords={skill.keywords} />
        </div>
      )
    })
    return (
        <div style={ style.entry }>
            <WithGroupHeader title='Fähigkeiten'>
                {skills}
            </WithGroupHeader>
        </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}

export default Skills