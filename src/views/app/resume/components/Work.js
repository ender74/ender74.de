import React, { Component } from 'react'
import { Label, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import ReactTooltip from 'react-tooltip'
import { injectIntl, FormattedDate, FormattedMessage } from 'react-intl'

import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'
import Tags from './Tags'

const Schedule = ({startDate, endDate}) => {
    if (typeof endDate == 'undefined')
        return (
            <h5 style={style.schedule}>
                <FormattedMessage
                    id='resume.since'
                    defaultMessage='since'
                />&nbsp;
                <FormattedDate value={new Date(startDate)}/>
            </h5>
        )
    else
        return (
            <h5 style={style.schedule}><FormattedDate value={new Date(startDate)}/> - <FormattedDate value={new Date(endDate)}/></h5>
        )
}


class Work extends Component {
  render() {
    const { intl } = this.props
    const title = intl.formatMessage({
        id: 'resume.work',
        defaultMessage: 'work'
    })

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
      <WithGroupHeader title={title}>
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
        <Row>
            <Col sm={2}>
                <Schedule startDate={startDate} endDate={endDate} />
            </Col>
            <Col sm={10}>
                <div style={ style.text }>
                    <Link href={website} text={company} />
                    <div data-tip={ hl }><Label>{position}</Label></div>
                    {summary ? <div style={style.summary}>{summary}</div> : <div/> }
                    <b>
                        <FormattedMessage
                            id='resume.focusSkills'
                            defaultMessage='Major skills'
                        />:
                    </b>
                    &nbsp;{hl}
                </div>
            </Col>
            <ReactTooltip type='info' border='true'/>
        </Row>
      </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid',
        paddingBottom: '10px'
    },
    summary: {
        textAlign: 'justify',
        paddingTop: '5px',
        paddingBottom: '5px'
    },
    schedule: {
        paddingTop: '0px',
        borderTop: '0px'
    },
    text: {
        paddingTop: '7px'
    }
}

export default injectIntl(Work)