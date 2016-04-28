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
      <Jumbotron style={{padding: '15px'}}>
        <Row>
            <Col sm={4}>
                {portrait}
            </Col>
            <Col sm={8}>
                <h3>{this.props.basics.name}</h3>
                <div className='hide-when-printing'>
                    (<Link href="/foaf.rdf" text="FOAF" />)
                </div>
                <h3>{this.props.basics.label}</h3>
            </Col>
        </Row>
      </Jumbotron>
    )
  }
}

export default Title