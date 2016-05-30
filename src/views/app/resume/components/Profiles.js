import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap'
import { injectIntl } from 'react-intl'

import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class ProfileEntry extends Component {
    render() {
        return (
            <div>
                <Row style={ styles.row }>
                    <Col sm={4}><Label>{this.props.network}</Label></Col>
                    <Col sm={8}>
                        <span className='hide-when-printing'>
                            <Link href={this.props.url} text={this.props.username} />
                        </span>
                        <span className='hide-on-screen'>
                            {this.props.username}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Profiles extends Component {
  render() {
    const { intl } = this.props
    const title = intl.formatMessage({
        id: 'resume.profiles',
        defaultMessage: 'profiles'
    })

    const profiles = this.props.profiles.map(function (profile, index) {
      return (
        <ProfileEntry
          key={index}
          network={profile.network}
          url={profile.url}
          username={profile.username} />
      )
    })
    return (
      <WithGroupHeader title={title}>
        {profiles}
      </WithGroupHeader>
    )
  }
}

const styles = {
    row: {
        marginBottom: '5px'
    }
}

export default injectIntl(Profiles)