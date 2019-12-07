import React, { useState } from 'react';


import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
  } from "react-google-maps";

import * as parksData from "../../data/skateparks.json"
import mapStyles from "../../mapStyles";


import {churches} from '../Church/ChurchList';
function Map() {
    const [selectedChurch, setSelectedChurch] = useState(null);
  
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 42.3736, lng: -71.1097 }}
        defaultOptions={{styles: mapStyles}}
      >
      
      {/* {churches.map(church => (
          <Marker key = {church.id} position={{ 
            lat: church.lat,
            lng: church.lng,
            }} 
            onClick={() => {
              setSelectedChurch(church);
            }}
            icon={{
              url: '/church.png',
              scaledSize: new window.google.maps.Size(25,25) 
            }}
          />
        ))} */}


       {parksData.features.map(church => (
          <Marker key = {church.properties.PARK_ID} position={{ 
            lat: church.geometry.coordinates[1],
            lng: church.geometry.coordinates[0],
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
  
        {/* {selectedChurch && (
          <InfoWindow
            position={{ 
              lat: selectedChurch.lat,
              lng: selectedChurch.lng, 
            }} 
            onCloseClick={() => {
              setSelectedChurch(null);
            }}
          >
            <div>
              <h2>{selectedChurch.name}</h2>
              <p>{selectedChurch.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }  */}
  
       {selectedChurch && (
          <InfoWindow
             position={{ 
              lat: selectedChurch.geometry.coordinates[1],
              lng: selectedChurch.geometry.coordinates[0], 
            }} 
             onCloseClick={() => {
            setSelectedChurch(null);
           }}
         >
            <div>
             <h2>{selectedChurch.properties.NAME}</h2>
             <p>{selectedChurch.properties.DESCRIPTIO}</p>
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
        <div style = {{ width: "30vw", height: "50vh", }}>
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