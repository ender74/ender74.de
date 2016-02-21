import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'

class About extends Component {
  render() {
    return (
      <WithGroupHeader title='Über mich'>
        {this.props.basics.summary}
      </WithGroupHeader>
    )
  }
}

export default About