import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

    render() {
        //saying you want the map to occupy all of the space of the parent
        return (
          <div style={{ height: '10%', width: '10%' }}>
            <Map google={this.props.google} zoom={14}
                center={{
                    lat: 32.7157,
                    lng: -117.1611
                }}>
                <Marker
                    center={{
                        lat: 32.7157,
                        lng: -117.1611
                    }} />
            </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAuIQ4ntNPCHbg2HT7QaqIRu7d8QIHpLbY')
})(MapContainer)

//export default Map;