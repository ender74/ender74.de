import React from 'react'
import WithGroupHeader from './withGroupHeader'
import Link from './link'

const ProfileEntry = React.createClass({
  render: function () {
    return (
      <div className="profileEntry">
        <h3>{this.props.network}</h3>
        <Link href={this.props.url} text={this.props.username} />
      </div>
    )
  }
})

const Profiles = React.createClass({
  render: function () {
    var profiles = this.props.profiles.map(function (profile, index) {
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
})

export default Profiles