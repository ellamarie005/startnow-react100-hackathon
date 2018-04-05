import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import axios from 'axios';
import Map from './components/Map';
import RestInfo from './components/RestInfo';
import Zomato from 'zomato.js';
import { Marker } from 'google-maps-react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      place: 'gas lamp',
      lat: 32.7157,
      lng: -117.1611,
      zoom: 10
    }
    this.updateStateValues = this.updateStateValues.bind(this);
    this.search = this.search.bind(this);
  }

  updateStateValues(event) {
    this.setState({ place: event.target.value })
  }

  componentWillMount() {
    this.search();
  }

  search() {
    //https://developers.zomato.com/api/v2.1/search?q=san%20diego&apikey=320b6c6d8f00afe358d35021470454a1

    const url = 'https://developers.zomato.com/api/v2.1/search';
    const apikey = 'APIKEY'

    axios
      .get(url, {
        params: {
          q: this.state.place,
          apikey
        }
      })
      .then(({ data }) => {
        this.setState({ restaurants: data.restaurants })
      })
      .catch(function (err) { console.log(err) })
  }
  render() {
    return (
      <div className='container'>
        <div className='App'>
          <h1>Where should I eat today?</h1>
          <hr className='bg-secondary'></hr>
          <div>
            <div>
              <div>
                <input value={this.state.place} onChange={this.updateStateValues} />
                <button onClick={this.search}>Submit</button>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card'>
                  <h1 className='card-header'>List of places</h1>
                  <div className='card-body' >
                    {
                      this.state.restaurants.map((restaurant) => (
                        <RestInfo
                          key={restaurant.restaurant.id}
                          restaurant={restaurant.restaurant}
                          lat={this.state.lat}
                          lng={this.state.lng}
                          zoom={this.state.zoom}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className='col'>
                <Map restaurants={this.state.restaurants}
                  lat={this.state.lat}
                  lng={this.state.lng}
                  zoom={this.state.zoom}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;