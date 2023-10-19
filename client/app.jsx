import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function App() {
  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5
  });

  return (
    <Map
      container = {'map'}
      projection = {'globe'}
      mapboxAccessToken="pk.eyJ1IjoiendlaXNzMTg4MSIsImEiOiJjbG53azMydTcwOHNiMm9vMzBhN3M0a3k5In0.9InLK9I7aNrL8gBwS47L7g"
      initialViewState={{}}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/zweiss1881/clnwlvxx0004801p65zd2ehzm"
    >
      <Marker longitude={-100} latitude={40} anchor="bottom" >
      <FmdGoodIcon sx={{color: 'blue'}}/>
    </Marker>
    </Map>
  );
}

export default App;

