import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 32.7157,
      lng: -117.1611,
      zoom: 11
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    //https://www.googleapis.com/geolocation/v1/geolocate?key=APIKEYHERE
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }, () => console.log(this.props))
      });
    else console.log('geolocation is not supported')
  }

  render() {
    //saying you want the map to occupy all of the space of the parent
    return (
      <div>
        <Map google={this.props.google}
          style={{ width: 500, height: 500, background: 'blue' }}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
          ref='map'
        >

          <Marker
            position={{ lat: this.state.lat, lng: this.state.lng }}
            title="You are here!"  
          />
          {
            this.props.restaurants.map((restaurant) => (
              //console.log(restaurant.restaurant.location.latitude, restaurant.restaurant.location.longitude)
              <Marker
                key={restaurant.restaurant.id}
                google={this.props.google}
                position={{ lat: restaurant.restaurant.location.latitude, lng: restaurant.restaurant.location.longitude }}
                title={restaurant.restaurant.name}
              />
            ))}
        </Map >
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)
