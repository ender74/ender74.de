var React = require('react')
if (typeof window != 'undefined') {
    var L = require('leaflet')

    var Map = React.createClass({
        uid: function() {
            var uid = 0;
            return function(){
                return uid++;
            };
        },
        getInitialState: function() {
            return {
                uid: this.uid()
            }
        },
        setLocation: function(newLoc) {
            var latLon = new L.LatLng(newLoc.lat, newLoc.lon)
            this.state.map.setView(latLon,newLoc.zoom);
            this.state.marker.setLatLng(latLon)
        },
        componentDidMount: function() {
            L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images'
            var map = L.map('map-' + this.state.uid);
            // create the tile layer with correct attribution
            var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.';
            osmAttrib += 'Using OSM geocoder API <a href="http://wiki.openstreetmap.org/wiki/DE:Nominatim">Nominatim</a>'
            var osm = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 20, attribution: osmAttrib});		

            // start the map in South-East England
            map.setView(new L.LatLng(this.props.location.lat, this.props.location.lon),9);
            map.addLayer(osm);
            var marker = L.marker([this.props.location.lat, this.props.location.lon]).addTo(map);        
            return this.setState({
                map: map,
                marker: marker
            });
        },
        render: function() {
            return (
                <div style={this.props.style} className='map' id={'map-'+this.state.uid}></div>
            );
        }
    });

    module.exports = Map
} else {
    module.exports = React.createClass({
        render: function() {
            return (
                <div></div>
            );
        }
    })
}