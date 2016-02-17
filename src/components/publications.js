import React from 'react'
import Link from './link'

const PublicationEntry = React.createClass({
  render: function () {
    var labelStyle = {
        position: 'relative',
        float: 'left',
        textAlign: 'left',
        width: '8.0em',
        paddingRight: '0.5em'
    };    
    var valueStyle = {
    };
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
    );
  }
});

const Publications = React.createClass({
  render: function () {
    var publications = this.props.publications.map(function (publication, index) {
      return (
        <PublicationEntry
          key={index}  
          name={publication.name}
          publisher={publication.publisher}
          releaseDate={publication.releaseDate} 
          website={publication.website} 
          summary={publication.summary} />
      );
    });
    return (
      <div className="group">
        <h2 className="groupHeader">Veröffentlichungen</h2>
        {publications}
      </div>
    );
  }
});

export default Publications