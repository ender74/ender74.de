import React from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'

const About = React.createClass({
  render: function () {
    return (
      <WithGroupHeader title='Über mich'>
        {this.props.basics.summary}
      </WithGroupHeader>
    )
  }
})

export default About