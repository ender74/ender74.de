import React, { Component } from 'react'
import { Label } from 'react-bootstrap'
import Radium from 'radium'
import ReactTooltip from 'react-tooltip'

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
          description={work.description}
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
    const { description, startDate, endDate, position, website, company, summary, highlights } = this.props

    let hl = ""
    let sep = ""
    for (var k of highlights) {
        hl = hl + sep + k
        sep = ", "
    }

    return (
      <div style={ style.entry } className={summary ? '' : 'hide-when-printing'}>
        <Schedule startDate={startDate} endDate={endDate} />
        <Link href={website} text={company} />
        <div data-tip={ hl }><Label>{position}</Label></div>
        {summary ? <div>{summary}</div> : <div/> }
        <ReactTooltip type='info' border='true'/>
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