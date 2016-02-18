import React from 'react'
import WithCondition from './withCondition'

const Tags = React.createClass({
  render: function () {
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
})

const Tag = React.createClass({
  render: function () {
    var tagStyle = {
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
})

export default Tags