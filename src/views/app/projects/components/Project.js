import React, { Component } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class ProjectEntry extends Component {
  render() {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h4>{this.props.text.headline}</h4>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Label>{this.props.start_date.month}/{this.props.start_date.year} - {this.props.end_date.month}/{this.props.end_date.year}</Label>
                    &nbsp; <Label bsStyle='info'>{this.props.text.role}</Label>
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