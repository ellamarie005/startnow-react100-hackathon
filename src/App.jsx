import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Map from './components/Map';
import Places from './components/Places';


class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  // componentWillMount() {
  //   axios
  //     .get('http://echo-api.3scale.net/?user_key=7e279f3942bf77fce9a3c1bf6989c498')
  //     .then(response => response.data)
  //     .then(places => this.setState({places}))
  // }

  render() {
    const location = {
      lat: 32.7114,
      lng: -117.1599
    }
    return (
      <div className='container'>
        <div className='App'>
          <h1>What should do today?</h1>
          <hr className='bg-secondary'></hr>
          <div>
            <form>
              <p>How far do you want to go?
            <input className='radius' />
                <button>Click Me</button></p>
            </form>
            <div style={{ width: 500, height: 500, background: 'blue' }}>
              <Map />
            </div>
            <div><Places /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;