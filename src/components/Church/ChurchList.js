import React from 'react';
import './ChurchList.css';
import Church from './Church';

import Map from '../Map/Map';

let churches = [{
  id: 1,
  name: 'Citylife',
  url:<a href="/citylife">Citylife</a>, 
  denomination: 'Presbyterian',
  address: '200 Stuart St, Boston, MA 02116',
  times: '10:30am-12:00pm'
}, {
  id: 2,
  name: 'Aletheia',
  url: <a href="/aletheia">Aletheia</a>,
  denomination: 'Non-Denominational',
  address: '820 Massachusetts Ave, Cambridge, MA 02139',
  times: '9:00am-10:30am'
}, {
  id: 3,
  name: 'Symphony',
  url: <a href="/symphony">Symphony</a>,
  denomination: 'Non-Denominational',
  address: '971 Commonwealth Avenue, Boston, MA 02215',
  times: '11:00am-12:30pm'
}, {
  id: 4,
  name: 'St. Paul',
  url: <a href="https://stpaulparish.org/">St. Paul</a>,
  denomination: 'Catholic',
  address: '29 Mt Auburn St, Cambridge, MA 02138',
  times: '9:30am-12:00pm'
}, {
  id: 5,
  name: 'Cambridge Community Church Fellowship (CCFC)',
  url: <a href="https://ccfc-church.org/">Cambridge Community Church Fellowship (CCFC)</a>,
  denomination: 'Evangelical',
  address: '234 Franklin St, Cambridge, MA 02139',
  times: '1:00pm-2:30pm'
}, {
  id: 6,
  name: 'Highrock Church',
  url: <a href="https://www.highrockcambridge.org/">Highrock Church</a>,
  denomination: 'Evangelical',
  address: '50 Quincy St, Cambridge, MA 02139',
  times: '9:00am-10:30am'
}, {
  id: 7,
  name: 'Park Street Church',
  url: <a href="https://www.parkstreet.org/">Park Street Church</a>,
  denomination: 'Evangelical',
  address: '1 Park St, Boston, MA 02108',
  times: '10:30am-12:00pm'
}, {
  id: 8,
  name: 'Pentecostal Tabernacle',
  url: <a href="http://ptspice.org/">Pentecostal Tabernacle</a>,
  denomination: 'Assemblies of God',
  address: '56 Magazine St, Cambridge, MA 02139',
  times: '8:30am-10:00am'
}, {
  id: 9,
  name: 'Hope Fellowship Church',
  url: <a href="https://www.hopefellowshipchurch.org/">Hope Fellowship Church</a>,
  denomination: 'Baptist',
  address: '16 Beech St, Cambridge, MA 02140',
  times: '11:00am-12:30pm'
}, {
  id: 10,
  name: 'Hillsong Church Boston',
  url: <a href="https://hillsong.com/boston/">Hillsong</a>,
  denomination: 'Non-denomination',
  address: '279 Tremont St, Boston, MA 02116',
  times: '1:00pm-2:30pm'
}, {
  id: 11,
  name: 'Menonnite Congregation of Boston',
  url: <a href="https://mennonitecongregationofboston.org/">Menonnite Congregation of Boston</a>,
  denomination: 'Menonite',
  address: '1555 Massachusetts Ave, Cambridge, MA 02138',
  times: '5:00pm-6:30pm'
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
        <Map />

      </div>
    );
  }
}

export default ChurchList;