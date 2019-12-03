import React from 'react';
import './App.css';

import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
  } from "react-google-maps";
  
  function Map() {
    const [selectedChurch, setSelectedChurch] = useState(null);
  
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
        defaultOptions={{styles: mapStyles}}
      >
        {parksData.features.map(church => (
          <Marker key = {church.properties.PARK_ID} position={{ 
            lat: church.geometry.coordinates[1],
            lng: church.geometry.coordinates[0], 
            }} 
            onClick={() => {
              setSelectedChurch(church);
            }}
            icon={{
              url: '/hotdog.png',
              scaledSize: new window.google.maps.Size(25,25) 
            }}
          />
        ))}
  
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
  
  export default function App() {
    return (
      <div style = {{ width: "100vw", height: "100vh"}}>
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyASigF8g5y-u4pWOqF41qMmiF2gWBQCUVw
         
          `}
          loadingElement={<div style={{ height: "100%" }} /> }
          containerElement={<div style={{ height: "100%" }} /> }
          mapElement={<div style={{ height: "100%" }} /> }
  
        />
      </div>
    );
  }
  
// class App extends React.Component {
//     render() {
//         return (
//             <h1>HI!!!!</h1>
//         )
//     }
// }

// export default App;