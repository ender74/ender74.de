import React, { Component } from 'react'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class ProfileEntry extends Component {
  render() {
    return (
      <div className="profileEntry">
        <h3>{this.props.network}</h3>
        <Link href={this.props.url} text={this.props.username} />
      </div>
    )
  }
}

class Profiles extends Component {
  render() {
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
      <WithGroupHeader title='Profile'>
        {profiles}
      </WithGroupHeader>
    )
  }
}

export default Profiles