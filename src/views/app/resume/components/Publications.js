import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class PublicationEntry extends Component {
  render() {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h5>{this.props.name}</h5>
                </Col>
            </Row>
            <Row>
                <Col sm={2}><Label>Titel</Label></Col>
                <Col sm={10}>{this.props.summary}</Col>
            </Row>
            <Row>
                <Col sm={2}><Label>Veröffentlicht</Label></Col>
                <Col sm={10}>{this.props.releaseDate}</Col>
            </Row>
            <Row className='hide-when-printing'>
                <Col sm={2}><Label>Link</Label></Col>
                <Col sm={10}><Link href={this.props.website} text="PDF"/></Col>
            </Row>
        </div>
    )
  }
}

class Publications extends Component {
  render() {
    const publications = this.props.publications.map(function (publication, index) {
      return (
        <div key={index} style={ style.entry }>
            <PublicationEntry
              name={publication.name}
              publisher={publication.publisher}
              releaseDate={publication.releaseDate}
              website={publication.website}
              summary={publication.summary} />
        </div>
      )
    })
    return (
        <div style={ style.entry }>
            <WithGroupHeader title='Veröffentlichungen'>
                {publications}
            </WithGroupHeader>
        </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}


export default Publications