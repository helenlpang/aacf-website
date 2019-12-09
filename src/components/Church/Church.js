import React from 'react';

import './Church.css';
import Table from 'react-bootstrap/Table'
class Church extends React.Component {
	render() {
		return (
			

			<tbody> 
			<tr className="church-profile" 	key={this.props.church.id}>
				<td>{this.props.church.url}</td>
				<td>{this.props.church.denomination}</td>
				<td>{this.props.church.address}</td>
				<td>{this.props.church.times}</td>
			</tr>

			</tbody>
		 	
		)
	}
}
export default Church;