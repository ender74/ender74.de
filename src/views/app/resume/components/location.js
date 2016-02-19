import React from 'react'
import Map from './map'
import Button from '../../lib/components/button'
import WithCondition from '../../lib/components/withCondition'
import WithGroupHeader from '../../lib/components/withGroupHeader'

const Location = React.createClass({
    initMap: function (Map) {
        if (Map) {
            var query = this.props.location.address + ',' + this.props.location.city
            Map.runGeocodeQuery(query)
            this.setState({map: Map})
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
    bringMeThere: function() {
        if (this.state.map) {
            this.state.map.bringMeThere()
        }
    },
    render: function () {
        const Location = { lat: 51.3, lon: 0.7 }
        const adressStyle = {
            width: '20.0em',
            paddingBottom: '1.0em'
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
                <div>
                    <WithCondition condition= { this.state.mapVisible }>
                        <div>
                            <Button onClick={ this.toggleMap } image='images/erioll_world_bw.png' alt='Karte ausblenden'/>
                            <Button onClick={ this.bringMeThere } image='images/erioll_world_routing.png' alt='Bring mich hin'/>
                        </div>
                    </WithCondition>    
                    <WithCondition condition= { !this.state.mapVisible }>
                        <Button onClick={ this.toggleMap } image='images/erioll_world.png' alt='Karte einblenden'/>
                    </WithCondition>    
                </div>
                <WithCondition condition= { this.state.mapVisible }>
                    <Map style= { mapStyle } location = { Location } ref= { this.initMap } />
                </WithCondition>
            </WithGroupHeader>
        )
    }
})

export default Location