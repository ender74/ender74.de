import React from 'react'
import Map from './map'
import WithCondition from './withCondition'
import WithGroupHeader from './withGroupHeader'

const Location = React.createClass({
    initMap: function (Map) {
        if (Map) {
            var query = this.props.location.address + ',' + this.props.location.city
            Map.runGeocodeQuery(query)
        }
    },
    getInitialState: function () {
        return { mapVisible: false };
    },
    toggleMap: function() {
        this.setState({
            mapVisible: !this.state.mapVisible
        })  
    },
    render: function () {
        const Location = { lat: 51.3, lon: 0.7 }
        const adressStyle = {
            width: '20.0em'
        }
        const mapStyle = {
            width: '40.0em',
            height: '30.0em',
            top: '1.0em',
            left: '0.0em',
            background: '#EFEFEF',
            padding: '1.0em 1.0em 1.0em 1.0em',
            overflow: 'hidden',
            position: 'relative'
        }
        return (
            <WithGroupHeader title='Adresse (Arbeit)' >
                <div style= { adressStyle }>
                    <div>{ this.props.location.address } </div>
                    <div>{ this.props.location.postalCode } {this.props.location.city } </div>
                </div>
                <button onClick={ this.toggleMap }>Karte</button>
                <WithCondition condition= { this.state.mapVisible }>
                    <Map style= { mapStyle } location = { Location } ref= { this.initMap } />
                </WithCondition>
            </WithGroupHeader>
        )
    }
})

export default Location