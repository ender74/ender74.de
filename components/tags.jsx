var React = require("react")

var Tags = React.createClass({
  render: function () {
    var listStyle = {
        overflow: 'hidden'
    };
    var tagList = this.props.tags.map(function (entry, index) {
        return (
            <Tag tag={entry} nr={index} />  
          );
        });
    if (this.props.title) {
        return (
            <div style={listStyle}>
                <h4>{this.props.title}</h4>
                {tagList}
            </div>
        );
    } else {
        return (
            <div style={listStyle}>
               {tagList}
            </div>
        );
    }
  }
});

var Tag = React.createClass({
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

module.exports = Tags