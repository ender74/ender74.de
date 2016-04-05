import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class Contact extends Component {
  render() {
    return (
        <WithGroupHeader title='Kontakt'>
            <div>
                <Row>
                    <Col sm={2}><Label>Email</Label></Col>
                    <Col sm={10}><Link href={"mailto:"+this.props.basics.email} text={this.props.basics.email} /></Col>
                </Row>
                <Row>
                    <Col sm={2}><Label>Telefon</Label></Col>
                    <Col sm={10}>{this.props.basics.phone}</Col>
                </Row>
                <Row>
                    <Col sm={2}><Label>Webseite</Label></Col>
                    <Col sm={10}><Link href={this.props.basics.website} text={this.props.basics.website} /></Col>
                </Row>
            </div>
        </WithGroupHeader>
    )
  }
}

export default Contact