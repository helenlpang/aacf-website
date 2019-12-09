import React from 'react';

import './Church.css';

class Church extends React.Component {
	render() {
		//profile for each church: url, denomination, address, sermon times
		return (
			
			<tbody> 
			<tr className="church-profile" 	key={this.props.church.id}>
				<td style={{textDecorationLine: "underline"}}>{this.props.church.url}</td>
				<td>{this.props.church.denomination}</td>
				<td>{this.props.church.address}</td>
				<td>{this.props.church.times}</td>
			</tr>

			</tbody>
		 	
		)
	}
}
export default Church;