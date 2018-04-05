import React, { Component } from 'react';

export default ({ restaurant }) => {
  if (!restaurant) {
    return null
  }
  return (
    <div className='card text-center'>
      <img src={restaurant.thumb} />
      <a href={restaurant.url || '#'}>
        <h5>{restaurant.name || 'no name'}</h5></a>({restaurant.cuisines || 'no cuisine'})
      <p>{restaurant.location.address || 'no loc'}</p>
    </div>
  )
}


