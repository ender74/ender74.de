import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Label } from 'react-bootstrap'
import Linkify from 'react-linkify'
import WithCondition from '../../lib/components/withCondition'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'
import Media from './Media'

const roleStyles = {
    'Entwickler': 'info',
    'Projektleiter': 'success',
    'Architekt': 'warning'
}

const Schedule = ({start_date, end_date}) => {
    const text = typeof end_date == 'undefined' ?
        <span>seit {start_date.month}/{start_date.year}</span> :
        <span>{start_date.month}/{start_date.year} - {end_date.month}/{end_date.year}</span>
    return (
        <Label>{text}</Label>
    )
}

class ProjectEntry extends Component {
  render() {
    var roleText = typeof this.props.text.role == 'string' ? [ this.props.text.role ] : this.props.text.role
    var roles = []
    for (var key in roleText) {
        const role = roleText[key]
        roles.push(<span key={key}>&nbsp; <Label bsStyle={roleStyles[role]}>{role}</Label></span>)
    }
    const desc = this.props.text.text
    const text = <span><span className='hide-when-printing'><Linkify>{desc}</Linkify></span><span className='hide-on-screen'>{desc}</span></span>
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Schedule start_date={this.props.start_date} end_date={this.props.end_date} />
                    { roles }
                 </Col>
            </Row>
           <Row>
                <Col sm={12}>
                    <p style={{textAlign: 'justify'}}>{text}</p>
                </Col>
            </Row>
        </div>
    )
  }
}

class ProjectList extends Component {
  render() {
    const entries = []
    for (var index in this.props.events) {
      var entry = this.props.events[index]
      const text = entry.text ? entry.text.headline : ''
      const title = <span>{text}</span>
      const media = this.props.events[index].media
      entries.push(
        <div key={ index } style={ style.entry }>
            <WithGroupHeader title={ title }>
                <ProjectEntry
                  {...entry} />
                <WithCondition condition = { typeof media.url !== 'undefined' && media.url.length > 0}>
                  <Media {...media} />
                </WithCondition>
            </WithGroupHeader>
        </div>
      )
    }
    return (
      <div>
        <div className='hide-on-screen'>
            <Jumbotron>
                <Row>
                    <Col sm={8}>
                        <h3>Meine Projekte</h3>
                    </Col>
                    <Col sm={4}>
                        <Row><Col>Heiko Hüter</Col></Row>
                        <Row><Col>heiko.hueter@ender74.de</Col></Row>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
        {entries.reverse()}
      </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}

export default ProjectList
