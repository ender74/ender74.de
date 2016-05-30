import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import { injectIntl } from 'react-intl'

class About extends Component {
  render() {
    const { intl } = this.props

    const about = intl.formatMessage({
        id: 'resume.about',
        defaultMessage: 'About me'
    })

    return (
      <WithGroupHeader title={about}>
        <p style={{textAlign: 'justify'}}>
        {this.props.basics.summary}
        </p>
      </WithGroupHeader>
    )
  }
}

export default injectIntl(About)