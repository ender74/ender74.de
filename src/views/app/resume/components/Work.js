import React, { Component } from 'react'
import { Label } from 'react-bootstrap'
import Radium from 'radium'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'
import Tags from './Tags'

const Schedule = ({startDate, endDate}) => {
    if (typeof endDate == 'undefined')
        return (
            <h5><u>seit {startDate}</u></h5>
        )
    else
        return (
            <h5><u>{startDate} - {endDate}</u></h5>
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
      <div style={ style.entry }>
        <Schedule startDate={this.props.startDate} endDate={this.props.endDate} />
        <div>{this.props.position}</div>
        <Link href={this.props.website} text={this.props.company} />
        <div>
            {this.props.summary}
        </div>
      </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}


export default Work