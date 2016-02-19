import React from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'
import Tags from './tags'

const Work = React.createClass({
  render: function () {
    var maxIndex = this.props.work.length
    var work = this.props.work.map(function (work, index) {
      return (
        <WorkEntry
          key={index}
          company={work.company}
          position={work.position}
          website={work.website} 
          startDate={work.startDate}
          endDate={work.endDate}
          summary={work.summary}
          highlights={work.highlights}
          nr={maxIndex - index}/>
      )
    })
    return (
      <WithGroupHeader title='Berufserfahrung'>
        {work}
      </WithGroupHeader>
    )
  }
})

const WorkEntry = React.createClass({
  render: function () {
    return (
      <div>
        <h3><u>{this.props.startDate} - {this.props.endDate}</u></h3>
        <div>{this.props.position}</div>
        <Link href={this.props.website} text={this.props.company} />
        <div>{this.props.summary}</div>
        <Tags title="Schwerpunkte" tags={this.props.highlights} />
      </div>
    )
  }
})

export default Work