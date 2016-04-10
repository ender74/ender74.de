import React, { Component } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

const roleStyles = {
    'Entwickler': 'info',
    'Projektleiter': 'success',
    'Architekt': 'warning'
}

const Schedule = ({start_date, end_date}) => {
    if (typeof end_date == 'undefined')
        return (
            <Label>seit {start_date.month}/{start_date.year}</Label>
        )
    else
        return (
            <Label>{start_date.month}/{start_date.year} - {end_date.month}/{end_date.year}</Label>
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
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h4>{this.props.text.headline}</h4>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Schedule start_date={this.props.start_date} end_date={this.props.end_date} />
                    { roles }
                 </Col>
            </Row>
           <Row>
                <Col sm={12}>
                    <p>{this.props.text.text}</p>
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
      entries.push(
        <ProjectEntry
          key={index}  
          {...entry} />
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