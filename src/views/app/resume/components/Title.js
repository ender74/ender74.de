import React, { Component } from 'react'
import { Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap'
import Link from '../../lib/components/link'

class Title extends Component {
  render() {
    var portrait
    if (this.props.basics.picture) {
        portrait = <Image style={{height: '240px'}} src={this.props.basics.picture} responsive />
    } else {
        portrait = "";
    }
    return (
      <Jumbotron>
        <Row>
            <Col sm={4}>
                {portrait}
            </Col>
            <Col sm={8}>
                <h2><Link href="" text={this.props.basics.name} /></h2>
                <h3>{this.props.basics.label}</h3>
                <Link href="/foaf.rdf" text="FOAF" />
            </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Title