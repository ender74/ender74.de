import React, { Component } from 'react'
import Link from '../../lib/components/link'

class Footer extends Component {
  render() {
    var footerStyle = {
        position: "relative",
        top: "2.0em",
        padding: "0.5em 0.0em 0.5em 0.0em"
    }
    return (
      <div style={footerStyle}>
        <hr/>
        <div>Diese Seite ist als React Anwendung implementiert. Die Daten werden aus einer <Link href="resume.json" text="JSON Datei" /> geladen. 
        Die Quellen liegen auf <Link href="https://github.com/ender74/resume.git" text="github"/>.</div>
      </div>
    )
  }
}

export default Footer