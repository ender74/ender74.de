import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap'
import { injectIntl, FormattedDate, FormattedMessage } from 'react-intl'

import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class Basics extends Component {
  render() {
    const { basics, intl } = this.props

    const title = intl.formatMessage({
        id: 'resume.personal',
        defaultMessage: 'personal'
    })

    return (
        <WithGroupHeader title={title}>
            <div>
                <Row style={ styles.row }>
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.name'
                                defaultMessage='Name'
                            />
                        </Label>
                    </Col>
                    <Col sm={8}>{basics.name} <span className='hide-when-printing'>(<Link href="/foaf.rdf" text="FOAF" />)</span>
                    </Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.tel'
                                defaultMessage='Telephone'
                            />
                        </Label>
                    </Col>
                    <Col sm={8}>{basics.phone}</Col>
                </Row>
                <Row style={ styles.row }>
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.email'
                                defaultMessage='Email'
                            />
                        </Label>
                    </Col>
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
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.web'
                                defaultMessage='Web'
                            />
                        </Label>
                    </Col>
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
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.address'
                                defaultMessage='Address'
                            />
                        </Label>
                    </Col>
                    <Col sm={8}>
                        <Row><Col sm={12}>{basics.location_private.address}</Col></Row>
                        <Row><Col sm={12}>{basics.location_private.postalCode} {basics.location_private.city}</Col></Row>
                    </Col>
                </Row>
                <Row style={ styles.row } className='hide-on-screen'>
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.birthday'
                                defaultMessage='Date of birth'
                            />
                        </Label>
                    </Col>
                    <Col sm={8}><FormattedDate value={new Date(basics.dateOfBirth)}/> in {basics.placeOfBirth}</Col>
                </Row>
                <Row style={ styles.row } className='hide-on-screen'>
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.family'
                                defaultMessage='Personal Status'
                            />
                        </Label>
                    </Col>
                    <Col sm={8}>{basics.personalStatus}</Col>
                </Row>
                <Row style={ styles.row } className='hide-on-screen'>
                    <Col sm={4}>
                        <Label>
                            <FormattedMessage
                                id='basics.nationality'
                                defaultMessage='Nationality'
                            />
                        </Label>
                    </Col>
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

export default injectIntl(Basics)