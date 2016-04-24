import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap'
import { FormattedDate } from 'react-intl'

import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class Basics extends Component {
  render() {
    const { basics } = this.props

    return (
        <WithGroupHeader title='Persönliche Daten'>
            <div>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Name</Label></Col>
                    <Col sm={8}>{basics.name}</Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Telefon</Label></Col>
                    <Col sm={8}>{basics.phone}</Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Email</Label></Col>
                    <Col sm={8}>
                        <span className='hide-when-printing'>
                            <Link href={"mailto:"+basics.email} text={basics.email} />
                        </span>
                        <span className='hide-on-screen'>
                            {basics.email}
                        </span>
                    </Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Web</Label></Col>
                    <Col sm={8}>
                        <span className='hide-when-printing'>
                            <Link href={basics.website} text={basics.website} />
                        </span>
                        <span className='hide-on-screen'>
                            {basics.website}
                        </span>
                    </Col>
                </Row>
                <Row style={ styles.row } className='hide-on-screen'>
                    <Col sm={4}><Label>Anschrift</Label></Col>
                    <Col sm={8}>
                        <Row><Col sm={12}>{basics.location_private.address}</Col></Row>
                        <Row><Col sm={12}>{basics.location_private.postalCode} {basics.location_private.city}</Col></Row>
                    </Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Geb.</Label></Col>
                    <Col sm={8}><FormattedDate value={new Date(basics.dateOfBirth)}/> in {basics.placeOfBirth}</Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Familienstand</Label></Col>
                    <Col sm={8}>{basics.personalStatus}</Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>Nationalität</Label></Col>
                    <Col sm={8}>{basics.nationality}</Col>
                </Row>
            </div>
        </WithGroupHeader>
    )
  }
}

const styles = {
    row: {
        marginBottom: '5px'
    }
}

export default Basics