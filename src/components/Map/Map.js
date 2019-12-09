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
  //built a hook to keep track of states without a class: selectedChurch tracks which church is clicked and setSelectedChurch can change the church displayed on the map  
    const [selectedChurch, setSelectedChurch] = useState(null);
  
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 42.3736, lng: -71.1097 }} //centered in cambridge
        defaultOptions={{styles: mapStyles}}
      >
      {/* //reads church data as churchData from the churches.json file */}
      {/* //making a marker based on the lat and lng coordinates of the church -> we used an address to lat lng converter online to find the values */}
       {churchData.properties.map(church => (
          <Marker key = {church.features.id} position={{ 
            lat: church.features.lat,
            lng: church.features.lng,
            }} 
            //changes selectedChurch based on which marker the user clicks on
            onClick={() => {
              setSelectedChurch(church);
            }}
            //sets icon and size of the church logo
            icon={{
              url: '/church.png',
              scaledSize: new window.google.maps.Size(25,25) 
            }}
          />
        ))}  
            
       {selectedChurch && (
         //creates infowindow which displays the church name and the church address each time the user clicks on a marker
          <InfoWindow
             position={{ 
              lat: selectedChurch.features.lat,
              lng: selectedChurch.features.lng, 
            }} 
             onCloseClick={() => {
            setSelectedChurch(null);
           }}
         >
         {/* //need the style tags because text color is opaque in the react-google-maps packages */}
            <div>
             <h2 style={{color: 'black'}}>{selectedChurch.features.name}</h2>
             <p style={{color: 'black'}}>{selectedChurch.features.address}</p>
            </div>
          </InfoWindow>
       )}
      </GoogleMap>
   );
 }
  
//wraps map using withScriptjs
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  //render map with Google API and API Key
  //key = AIzaSyASigF8g5y-u4pWOqF41qMmiF2gWBQCUVw
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