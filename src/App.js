import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import Map from './components/Map/Map';
  
  export default function App() {
    return (
      <div style = {{ width: "80vw", height: "80vh"}}>
        <Home />
        <Map 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyASigF8g5y-u4pWOqF41qMmiF2gWBQCUVw
         
          `}
          loadingElement={<div style={{ height: "100%" }} /> }
          containerElement={<div style={{ height: "100%" }} /> }
          mapElement={<div style={{ height: "100%" }} /> }
  
        />
      </div>
    );
  }
  
