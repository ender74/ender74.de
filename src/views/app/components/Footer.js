import React, { Component } from 'react'
import Link from '../lib/components/link'

class Footer extends Component {
  render() {
    var footerStyle = {
        background: "white",
        position: "relative",
        bottom: "0px",
        width: "100%",
        padding: "5px 5px"
    }
    return (
      <div style={footerStyle}>
        <div>Diese Seite ist als React Anwendung implementiert.
        Die Quellen liegen auf <Link href="https://github.com/ender74/resume.git" text="github"/>.</div>
      </div>
    )
  }
}

export default Footer