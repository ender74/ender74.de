import React from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'
import Nominatim from 'nominatim'

const Map = React.createClass({
    uid: function () {
        var uid = 0
        return function () {
            return uid++
        }
    },
    getInitialState: function () {
        return {
            uid: this.uid()
        }
    },
    runGeocodeQuery: function(query) {
        Nominatim.search({ q: query}, this.setLocationWithGeocoder)
    },
    setLocationWithGeocoder: function(err, opts, results) {
        var newLoc = results[0]
        newLoc.zoom = 16
        this.setLocation(newLoc)
    },
    setLocation: function (newLoc) {
        var latLon = new L.LatLng(newLoc.lat, newLoc.lon)
        this.state.map.setView(latLon, newLoc.zoom)
        this.state.marker.setLatLng(latLon)
        return this.setState({
            location: latLon
        })
    },
    findRoute: function (pos) {
        if (this.state.routingControl) 
            this.state.routingControl.removeFrom(this.state.map)
        
        var latLon = new L.LatLng(pos.coords.latitude, pos.coords.longitude)
        var routingControl = L.Routing.control({
            show: false,
            waypoints: [
                latLon,
                this.state.location
            ]
        }).addTo(this.state.map)
        this.setState({
            routingControl: routingControl
        })
    },
    bringMeThere: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.findRoute)
        } else {
            window.alert('Ihre aktuelle Position konnte nicht ermittelt werden.')
        }
    },
    componentDidMount: function () {
        L.Icon.Default.imagePath = './leaflet/images'
        var map = L.map('map-' + this.state.uid)
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.'
        osmAttrib += 'Using OSM geocoder API <a href="http://wiki.openstreetmap.org/wiki/DE:Nominatim">Nominatim</a>'
        var osm = new L.TileLayer(osmUrl, { minZoom: 0, maxZoom: 20, attribution: osmAttrib })

        map.setView(new L.LatLng(this.props.location.lat, this.props.location.lon), 9)
        map.addLayer(osm)
        var marker = L.marker([this.props.location.lat, this.props.location.lon]).addTo(map)
        return this.setState({
            map: map,
            marker: marker
        })
    },
    render: function () {
        return (
            <div style={ this.props.style } className= 'map' id= { 'map-'+this.state.uid } > </div>
            )
        }
    })

export default Map