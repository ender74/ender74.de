import React, { Component } from 'react'
import WithCondition from '../../lib/components/withCondition'

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
                <h4>{this.props.title}</h4>
            </WithCondition>
            {tagList}
        </div>
    )
  }
}

class Tag extends Component {
  render() {
    const tagStyle = {
        float: 'left'
    }
    if (this.props.nr === 0) 
        return (
            <div style={tagStyle}>{this.props.tag}</div>
        )
    else 
        return (
            <div style={tagStyle}>&nbsp;/&nbsp;{this.props.tag}</div>
        )
  }
}

export default Tags