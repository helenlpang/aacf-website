import React, { useState } from 'react';

import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
  } from "react-google-maps";

import * as churchData from "../../data/churches.json"
import mapStyles from "../../mapStyles";


function Map() {
    const [selectedChurch, setSelectedChurch] = useState(null);
  
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 42.3736, lng: -71.1097 }}
        defaultOptions={{styles: mapStyles}}
      >
      
       {churchData.properties.map(church => (
          <Marker key = {church.features.id} position={{ 
            lat: church.features.lat,
            lng: church.features.lng,
            }} 
            onClick={() => {
              setSelectedChurch(church);
            }}
            icon={{
              url: '/church.png',
              scaledSize: new window.google.maps.Size(25,25) 
            }}
          />
        ))}  
  
       {selectedChurch && (
          <InfoWindow
             position={{ 
              lat: selectedChurch.features.lat,
              lng: selectedChurch.features.lng, 
            }} 
             onCloseClick={() => {
            setSelectedChurch(null);
           }}
         >
            <div>
             <h2 style={{color: 'black'}}>{selectedChurch.features.name}</h2>
             <p style={{color: 'black'}}>{selectedChurch.features.address}</p>
            </div>
          </InfoWindow>
       )}
      </GoogleMap>
   );
 }
  

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  class FinalMap extends React.Component {
    render() {
      return (
        <div style = {{ width: "83vw", height: "60vh", }}>
          <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyASigF8g5y-u4pWOqF41qMmiF2gWBQCUVw`}
            loadingElement={<div style={{ height: "100%" }} /> }
            containerElement={<div style={{ height: "100%" }} /> }
            mapElement={<div style={{ height: "100%" }} /> }
          />
        </div>
      )
    }
  }

  export default FinalMap;