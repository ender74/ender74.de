import React from "react"
import Link from "./link"

const Contact = React.createClass({
  render: function () {
    var labelStyle = {
        position: 'relative',
        float: 'left',
        textAlign: 'left',
        width: '5.0em',
        paddingRight: '0.5em'
    };    
    var valueStyle = {
    };
    return (
      <div className="group">
        <h4 className="groupHeader">Kontakt</h4>
        <div style={labelStyle}>Email</div> 
        <div style={valueStyle}><Link href={"mailto:"+this.props.basics.email} text={this.props.basics.email} /></div>
        <div style={labelStyle}>Telefon</div>
        <div style={valueStyle}>{this.props.basics.phone}</div>
        <div style={labelStyle}>Webseite</div>
        <div style={valueStyle}><Link href={this.props.basics.website} text={this.props.basics.website} /></div>
      </div>
    );
  }
});

export default Contact