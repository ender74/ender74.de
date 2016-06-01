import React, { Component } from 'react'
import { PageHeader, Well, Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap'
import Link from '../../lib/components/link'

class Title extends Component {
  render() {
    var portrait
    if (this.props.basics.picture) {
        portrait = <Image style={{height: '240'}} src={this.props.basics.picture} responsive />
    } else {
        portrait = "";
    }
    return (
      <Jumbotron className='hide-when-printing' style={{padding: '15px'}}>
        <Row>
            <Col sm={4}>
                {portrait}
            </Col>
            <Col sm={8}>
                <Row>
                    <Col><h3>{this.props.basics.name}</h3></Col>
                </Row>
                <Row>
                    <Col><h3>{this.props.basics.label}</h3></Col>
                </Row>
                <Row>
                    <Col>{this.props.basics.label2}</Col>
                </Row>
            </Col>
        </Row>
      </Jumbotron>
    )
  }
}

export default Title