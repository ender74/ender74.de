import React from 'react'

const Tags = React.createClass({
  render: function () {
    var listStyle = {
        overflow: 'hidden'
    };
    var tagList = this.props.tags.map(function (entry, index) {
        return (
            <Tag tag={entry} nr={index} key={index} />  
          );
        });
    var title
    if (this.props.title) {
        title = <h4>{this.props.title}</h4>
    } else {
        title = ""
    }
    return (
        <div style={listStyle}>
            {title}
            {tagList}
        </div>
    );
  }
});

const Tag = React.createClass({
  render: function () {
    var tagStyle = {
        float: 'left'
    };
    if (this.props.nr === 0) {
        return (
            <div style={tagStyle}>{this.props.tag}</div>
        );
    } else {
        return (
            <div style={tagStyle}>&nbsp;/&nbsp;{this.props.tag}</div>
        );
    }
  }
});

export default Tags