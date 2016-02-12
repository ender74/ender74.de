var React = require("react")
var Link = require("./link.jsx")
var Tags = require("./tags.jsx")

var Work = React.createClass({
  render: function () {
    var maxIndex = this.props.work.length
    var work = this.props.work.map(function (work, index) {
      return (
        <WorkEntry
          key={index}
          company={work.company}
          position={work.position}
          website={work.website} 
          startDate={work.startDate}
          endDate={work.endDate}
          summary={work.summary}
          highlights={work.highlights}
          nr={maxIndex - index}/>
      );
    });
    return (
      <div className="group">
        <h2 className="groupHeader">Berufserfahrung</h2>
        {work}
      </div>
    );
  }
});

var WorkEntry = React.createClass({
  render: function () {
    var entryStyle = {
//        fontSize: 0.9 + 0.05*this.props.nr + 'em'
    };
    return (
      <div style={entryStyle}>
        <h3><u>{this.props.startDate} - {this.props.endDate}</u></h3>
        <div>{this.props.position}</div>
        <Link href={this.props.website} text={this.props.company} />
        <div>{this.props.summary}</div>
        <Tags title="Schwerpunkte" tags={this.props.highlights} />
      </div>
    );
  }
});

module.exports = Work