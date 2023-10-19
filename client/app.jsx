import React from 'react';
import { useState, useEffect } from 'react'
import Map, { Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import axios from 'axios';
import  Login from './Login';
import  Register  from './Register';

function App() {
  const myStorage = window.localStorage;
  const [locations, setLocations] = useState([{longitude: 0, latitude: 0}]);
  const [viewport, setViewport] = useState({
    longitude: 45,
    latitude: -70,
    zoom: 14
  })
  const [currentUser, setCurrentUser] = useState('Zack');
 
  
  useEffect(() => {
    const getLocations = async () => {
      const response = await axios.get('/locations')
      console.log(response)
      setLocations(response.data)
    }
   getLocations();
  }, [])
  
  const [seenLogin, setSeenLogin] = useState(false)
  const [seenRegister, setSeenRegister] = useState(false)
  function toggleLogin () {
    setSeenLogin(!seenLogin);
  }
  function toggleRegister () {
    setSeenRegister(!seenRegister);
  }
  const handleAddLocation = async (e) => {
    e.preventDefault();
    const newLocation = {
      username: currentUser,
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng
    }
    const response = await axios.post('/locations', newLocation)
    .then(response => setLocations([...locations, response.data]))
    .catch(err => console.log(err))
  }
 


  return (
    
    <div>
      <div>
        <button onClick={toggleLogin}>Login</button>
          {seenLogin ? <Login toggleLogin={toggleLogin} /> : null}
          <button onClick={toggleRegister}>Register</button>
          {seenRegister ? <Register toggleRegister={toggleRegister} /> : null}
      </div>
      <Map
      container = {'map'}
      projection = {'globe'}
      mapboxAccessToken="pk.eyJ1IjoiendlaXNzMTg4MSIsImEiOiJjbG53azMydTcwOHNiMm9vMzBhN3M0a3k5In0.9InLK9I7aNrL8gBwS47L7g"
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/zweiss1881/clnwlvxx0004801p65zd2ehzm"
      onDblClick={handleAddLocation}
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

