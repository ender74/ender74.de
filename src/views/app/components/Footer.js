import React, { Component } from 'react'
import Link from '../lib/components/link'

class Footer extends Component {
  render() {
    var footerStyle = {
        background: "white",
        position: "relative",
        bottom: "0px",
        width: "100%",
        padding: "15px 15px"
    }
    return (
      <div style={footerStyle} className='hide-when-printing'>
        <div>Diese Seite ist als responsive Webseite mit <a href="https://facebook.github.io/react/">React</a> und <a href="http://getbootstrap.com/">Bootstrap</a> realisiert. Die Quellen liegen auf <Link href="https://github.com/ender74/ender74.de.git" text="github"/>.</div>
      </div>
    )
  }
}

export default Footer