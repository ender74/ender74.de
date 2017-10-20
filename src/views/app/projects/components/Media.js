import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Label } from 'react-bootstrap'
import Linkify from 'react-linkify'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Link from '../../lib/components/link'

class Media extends Component {
  render() {
    return (
      <span className='hide-when-printing'>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe src={this.props.url} frameBorder="0"></iframe>
        </div>
      </span>
    )
  }
}

const style = {
}

export default Media
