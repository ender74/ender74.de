import React, { Component } from 'react'
import { Label } from 'react-bootstrap'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'
import Tags from './Tags'

const Schedule = ({startDate, endDate}) => {
    if (typeof endDate == 'undefined')
        return (
            <h3><u>seit {startDate}</u></h3>
        )
    else
        return (
            <h3><u>{startDate} - {endDate}</u></h3>
        )
}


class Work extends Component {
  render() {
    const maxIndex = this.props.work.length
    const work = this.props.work.map(function (work, index) {
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
}

class WorkEntry extends Component {
  render() {
    return (
      <div>
        <Schedule startDate={this.props.startDate} endDate={this.props.endDate} />
        <div>{this.props.position}</div>
        <Link href={this.props.website} text={this.props.company} />
        <div>{this.props.summary}</div>
        <Tags title="Schwerpunkte" tags={this.props.highlights} />
      </div>
    )
  }
}

export default Work