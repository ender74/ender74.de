import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import WithCondition from '../../lib/components/withCondition'
import WithGroupHeader from '../../lib/components/withGroupHeader'

const isBrowser = typeof window !== 'undefined'
const Map=isBrowser ? require('./Map') : <div></div>

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = { mapVisible: false }
        this.initMap = this.initMap.bind(this)
        this.toggleMap = this.toggleMap.bind(this)
        this.bringMeThere = this.bringMeThere.bind(this)
    }
    
    initMap(Map) {
        if (Map) {
            var query = this.props.location.address + ',' + this.props.location.city
            Map.runGeocodeQuery(query)
            this.setState({map: Map})
        }
    }
    toggleMap() {
        this.setState({
            mapVisible: !this.state.mapVisible
        })  
    }
    bringMeThere() {
        if (this.state.map) {
            this.state.map.bringMeThere()
        }
    }
    render() {
        const Location = { lat: 51.3, lon: 0.7 }
        const adressStyle = {
            width: '20.0em',
            paddingBottom: '1.0em'
        }
        const mapStyle = {
            width: '100%',
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
                            <Button onClick={ this.toggleMap }><img src='/images/erioll_world_bw.png' alt='Karte ausblenden'/></Button>
                            <Button onClick={ this.bringMeThere }><img src='/images/erioll_world_routing.png' alt='Bring mich hin'/></Button>
                        </div>
                    </WithCondition>
                    <WithCondition condition= { !this.state.mapVisible }>
                        <Button onClick={ this.toggleMap }><img src='/images/erioll_world.png' alt='Karte einblenden'/></Button>
                    </WithCondition>
                </div>
                <WithCondition condition= { isBrowser && this.state.mapVisible }>
                    <Map style= { mapStyle } location = { Location } ref= { this.initMap } />
                </WithCondition>
            </WithGroupHeader>
        )
    }
}

export default Location