import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'

class About extends Component {
  render() {
    return (
      <WithGroupHeader title='Über mich'>
        <p style={{textAlign: 'justify'}}>
        {this.props.basics.summary}
        </p>
      </WithGroupHeader>
    )
  }
}

export default About