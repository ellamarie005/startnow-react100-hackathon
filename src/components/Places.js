import React, {Component} from 'react'

class Places extends Component {
  render() {
    return (
      <div>List of places</div>
    )
  }
}

export default Places;

// const RapidAPI = require('rapidapi-connect');
// const rapid = new RapidAPI("default-application_5ab2cb6de4b06ec3937b5a18", "8a1c9358-b1b9-458e-8187-57fbaa0de1db");

// rapid.call('Zomato', 'getAllCategories', { 
// 	'apiKey': '320b6c6d8f00afe358d35021470454a1'

// }).on('success', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// }).on('error', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// });