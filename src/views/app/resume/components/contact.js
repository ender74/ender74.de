import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class Contact extends Component {
  render() {
    var labelStyle = {
        position: 'relative',
        float: 'left',
        textAlign: 'left',
        width: '5.0em',
        paddingRight: '0.5em'
    }  
    var valueStyle = {
    }
    return (
        <WithGroupHeader title='Kontakt'>
            <div style={labelStyle}>Email</div> 
            <div style={valueStyle}><Link href={"mailto:"+this.props.basics.email} text={this.props.basics.email} /></div>
            <div style={labelStyle}>Telefon</div>
            <div style={valueStyle}>{this.props.basics.phone}</div>
            <div style={labelStyle}>Webseite</div>
            <div style={valueStyle}><Link href={this.props.basics.website} text={this.props.basics.website} /></div>
        </WithGroupHeader>
    )
  }
}

export default Contact