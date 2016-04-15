import React, { Component } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import Linkify from 'react-linkify'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

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
    const text = <Linkify>{this.props.text.text}</Linkify>
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
      entries.push(
        <WithGroupHeader key={index} title={title}>
            <ProjectEntry
              {...entry} />
        </WithGroupHeader>
      )
    }
    return (
      <div>
        {entries.reverse()}
      </div>
    )
  }
}

export default ProjectList