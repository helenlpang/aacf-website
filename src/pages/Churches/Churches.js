import React, {useState} from 'react';
import '../../components/Church/ChurchList.css';
import Church from '../../components/Church/Church';

import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
  } from "react-google-maps";
import * as churchData from "../../data/skateparks.json"

import mapStyles from "../../mapStyles";

let churches = [{
  id: 1,
  name: 'Citylife',
  url:<a href="http://www.citylifeboston.org/">Citylife</a>, 
  denomination: 'Presbyterian',
  address: '10 Milk St #230, Boston, MA 02108',
  lat: 42.357260,
  lng: -71.055060
}, {
  id: 2,
  name: 'Aletheia',
  url: <a href="https://www.aletheia.org/">Aletheia</a>,
  denomination: 'Non-Denominational',
  address: '820 Massachusetts Ave, Cambridge, MA 02139',
  lat: 42.366779,
  lng: -71.106689
}, {
  id: 3,
  name: 'Symphony',
  url: <a href="https://www.symphonychurch.com/">Symphony</a>,
  denomination: 'Non-Denominational',
  address: '971 Commonwealth Avenue, Boston, MA 02215',
  lat: '',
  lng: ''
}, {
  id: 4,
  name: 'St. Paul',
  url: <a href="https://stpaulparish.org/">St. Paul</a>,
  denomination: 'Catholic',
  address: '29 Mt Auburn St, Cambridge, MA 02138',
  lat: '',
  lng: ''
}, {
  id: 5,
  name: 'Cambridge Community Church Fellowship (CCFC)',
  url: <a href="https://ccfc-church.org/">Cambridge Community Church Fellowship (CCFC)</a>,
  denomination: 'Evangelical',
  address: '234 Franklin St, Cambridge, MA 02139',
  lat: '',
  lng: ''
}, {
  id: 6,
  name: 'Highrock Church',
  url: <a href="https://www.highrockcambridge.org/">Highrock Church</a>,
  denomination: 'Evangelical',
  address: '50 Quincy St, Cambridge, MA 02139',
  lat: '',
  lng: ''
}, {
  id: 7,
  name: 'Park Street Church',
  url: <a href="https://www.parkstreet.org/">Park Street Church</a>,
  denomination: 'Evangelical',
  address: '1 Park St, Boston, MA 02108',
  lat: '',
  lng: ''
}, {
  id: 8,
  name: 'Pentecostal Tabernacle',
  url: <a href="http://ptspice.org/">Pentecostal Tabernacle</a>,
  denomination: 'Assemblies of God',
  address: '56 Magazine St, Cambridge, MA 02139',
  lat: '',
  lng: ''
}, {
  id: 9,
  name: 'Hope Fellowship Church',
  url: <a href="https://www.hopefellowshipchurch.org/">Hope Fellowship Church</a>,
  denomination: 'Baptist',
  address: '16 Beech St, Cambridge, MA 02140',
  lat: '',
  lng: ''
}, {
  id: 10,
  name: 'Hillsong Church Boston',
  url: <a href="https://hillsong.com/boston/">Hillsong</a>,
  denomination: 'Non-denomination',
  address: '279 Tremont St, Boston, MA 02116',
  lat: '',
  lng: ''
}, {
  id: 11,
  name: 'Menonnite Congregation of Boston',
  url: <a href="https://mennonitecongregationofboston.org/">Menonnite Congregation of Boston</a>,
  denomination: 'Menonite',
  address: '1555 Massachusetts Ave, Cambridge, MA 02138',
  lat: '',
  lng: ''
}]


class ChurchList extends React.Component {
  constructor() {
      super();
      this.state = {
      search: '',
     
      } 
      this.filteredChurches = churches;
  }

  updateSearch(event) {
      this.setState({search: event.target.value});
  }

  render() {
    this.filteredChurches = churches.filter(
        (church) => {
            return church.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    );
    return (
      <div className="church-list">
        <h1>Search for nearby churches!</h1>
        <input type='text' 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}>
        </input>
        <div className="church-info">
          <ul>
            {this.filteredChurches.map((church)=>{
                return <Church church={church} key={church.id}/>
            })}
          </ul>
        </div>
        <FinalMap />

      </div>
    );
  }
}

function Map() {
    const [selectedChurch, setSelectedChurch] = useState(null);
  
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 42.3736, lng: -71.1097 }}
        defaultOptions={{styles: mapStyles}}
      >
      
      {ChurchList.filteredChurches.map(church => (
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
  }  
  
const WrappedMap = withScriptjs(withGoogleMap(Map));

class FinalMap extends React.Component {
  render() {
    return (
      <div style = {{ width: "71vw", height: "60vh", }}>
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

export default ChurchList;