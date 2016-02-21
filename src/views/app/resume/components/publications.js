import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class PublicationEntry extends Component {
  render() {
    const labelStyle = {
        position: 'relative',
        float: 'left',
        textAlign: 'left',
        width: '8.0em',
        paddingRight: '0.5em'
    }    
    const valueStyle = {
    }
    return (
      <div className="publicationEntry">
        <h3>{this.props.name}</h3>
        <div style={labelStyle}>Titel</div>
        <div style={valueStyle}>{this.props.summary}</div>
        <div style={labelStyle}>Veröffentlicht am</div>
        <div style={valueStyle}>{this.props.releaseDate}</div>
        <div style={labelStyle}>Link</div>
        <div style={valueStyle}><Link href={this.props.website} text="PDF"/></div>
      </div>
    )
  }
}

class Publications extends Component {
  render() {
    const publications = this.props.publications.map(function (publication, index) {
      return (
        <PublicationEntry
          key={index}  
          name={publication.name}
          publisher={publication.publisher}
          releaseDate={publication.releaseDate} 
          website={publication.website} 
          summary={publication.summary} />
      )
    })
    return (
      <WithGroupHeader title='Veröffentlichungen'>
        {publications}
      </WithGroupHeader>
    )
  }
}

export default Publications