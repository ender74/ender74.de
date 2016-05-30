import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
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
        <div>
            <FormattedMessage
                id='footer.note1'
                defaultMessage='This page is implemented as responsive webapp with'
            />
            &nbsp;
            <a href="https://facebook.github.io/react/">React</a>
            &nbsp;
            <FormattedMessage
                id='footer.and'
                defaultMessage='and'
            />
            &nbsp;
            <a href="http://getbootstrap.com/">Bootstrap</a>
            &nbsp;
            <FormattedMessage
                id='footer.note2'
                defaultMessage='the sources are hosted on'
            />
            &nbsp;
            <Link href="https://github.com/ender74/ender74.de.git" text="github"/>.</div>
      </div>
    )
  }
}

export default Footer