import React from 'react';
import { useState, useEffect } from 'react'
import Map, { Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import axios from 'axios';

function App() {

  const [locations, setLocations] = useState([{longitude: 0, latitude: 0}]);
  const [viewport, setViewport] = useState({
    longitude: 45,
    latitude: -70,
    zoom: 14
  })
  const [currentUser, setCurrentUser] = useState('Zack')
  useEffect(() => {
    const getLocations = async () => {
      const response = await axios.get('/locations')
      console.log(response)
      setLocations(response.data)
    }
   getLocations();
  }, [])


  return (
    <div>
      <Map
      container = {'map'}
      projection = {'globe'}
      mapboxAccessToken="pk.eyJ1IjoiendlaXNzMTg4MSIsImEiOiJjbG53azMydTcwOHNiMm9vMzBhN3M0a3k5In0.9InLK9I7aNrL8gBwS47L7g"
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/zweiss1881/clnwlvxx0004801p65zd2ehzm"
       >
      {
        locations.map((location) => (
          <>
          <Marker
          longitude={location.longitude}
          latitude={location.latitude}
          anchor='center'>
            <FmdGoodIcon 
            className='icon'
            style={{fontSize: viewport.zoom *2, color: "purple"}}
            />
          </Marker>
          </>
        ))
      }
      </Map>
    </div>
  );
}

export default App;

