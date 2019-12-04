import React from 'react';
import Church from './Church';

let churches = [{
    id: 1,
    name: 'Citylife',
    denomination: 'Presbyterian'
  }, {
    id: 2,
    name: 'Aletheia',
    denomination: 'Non-Denominational'
  }, {
    id: 3,
    name: 'Symphony',
    denomination: 'Non-Denominational'
  }, {
    id: 4,
    name: 'St. Paul',
    denomination: 'Catholic'
  }]

class ChurchList extends React.Component {
  constructor() {
      super();
      this.state = {
      search: ''
    }
  }

  updateSearch(event) {
      this.setState({search: event.target.value});
  }

  render() {
    let filteredChurches = churches.filter(
        (church) => {
            return church.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    );
    return (
      <div>
        <input type='text' 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}>
        </input>
       <ul>
            {filteredChurches.map((church)=>{
                return <Church church={church} key={church.id}/>
            })}
       </ul>
      </div>
    );
  }
}

export default ChurchList;