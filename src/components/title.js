import React from 'react'
import Link from './link'
import Contact from './contact'

const Title = React.createClass({
  render: function () {
    var titleStyle = {
        width: '100%',
        height: '15.0em',
        background: '#EFEFEF',
        padding: '1.0em 1.0em 1.0em 1.0em',
        overflow: 'hidden',
        position: 'relative'
    };
    var portraitStyle = {
        height: '15.0em',
        float: 'left',
        marginRight: '1.0em'
    };
    var nameTitleStyle = {
        position: 'absolute',
        top: '0em',
        left: '13.0em',
        width: '20.0em',        
        display: 'inline-block'
    };
    var contactStyle = {
        position: 'absolute',
        top: '0.0em',
        left: '35.0em',
        width: '20.0em',
        height: '6.0em'
    };
    var portrait
    if (this.props.basics.picture) {
        portrait = <img style={portraitStyle} src={this.props.basics.picture} />
    } else {
        portrait = "";
    }
    return (
      <div style={titleStyle}>
        {portrait}
        <div style={nameTitleStyle}>
            <h1><Link href="" text={this.props.basics.name} /></h1>
            <h3>{this.props.basics.label}</h3>
            <Link href="foaf.rdf" text="FOAF" />
        </div>
        <div style={contactStyle}>
            <Contact basics={this.props.basics} />
        </div>
      </div>
    );
  }
});

export default Title