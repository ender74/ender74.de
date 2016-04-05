import React, { Component } from 'react'
import { ButtonToolbar, Label } from 'react-bootstrap'
import WithCondition from '../../lib/components/withCondition'

const Tag = ( { tag } ) => {
    return (
        <span style={{ padding: '5px 5px 5px 5px'}}><Label>{tag}</Label></span>
    )
}

class Tags extends Component {
  render() {
    var listStyle = {
        overflow: 'hidden'
    }
    var tagList = this.props.tags.map(function (entry, index) {
        return (
            <Tag tag={entry} nr={index} key={index} />  
          )
        })
    return (
        <div style={listStyle}>
            <WithCondition condition={this.props.title}>
                <h5>{this.props.title}</h5>
            </WithCondition>
            <div style={styles.tags}>{tagList}</div>
        </div>
    )
  }
}

const styles = {
    tags: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}

export default Tags