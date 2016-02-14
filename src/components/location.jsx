var React = require('react')
var Nominatim = require('nominatim')
var Map = require('./map.jsx')

var Location = React.createClass({
        geocode: function(Map) {
            var query = this.props.location.address + ',' + this.props.location.city 
            Nominatim.search({ q: query}, function(err, opts, results) {
                var newLoc = results[0]
                newLoc.zoom = 16
                Map.setLocation(newLoc)
            })
        },
        render: function () {
            const Location = {lat: 51.3, lon: 0.7}
            var adressStyle = {
                width: '20.0em'
            };      
            var mapStyle = {
                width: '40.0em',
                height: '30.0em',
                top: '1.0em',
                left: '0.0em',
                background: '#EFEFEF',
                padding: '1.0em 1.0em 1.0em 1.0em',
                overflow: 'hidden',
                position: 'relative'
            };        
            return (
                <div className='group'>
                    <h2 className='groupHeader'>Adresse (Arbeit)</h2>
                    <div style={adressStyle}>
                        <div>{this.props.location.address}</div>
                        <div>{this.props.location.postalCode} {this.props.location.city}</div>
                    </div>
                    <Map style={mapStyle} location={Location} ref={this.geocode} />
                </div>
        );
    }
});

module.exports = Location