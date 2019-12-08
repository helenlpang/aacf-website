import React from 'react';

import './Church.css';

class Church extends React.Component {
	render() {
		return (
			<tr className="church-profile" 	key={this.props.church.id}>
				<td>{this.props.church.url}</td>
				<td>{this.props.church.denomination}</td>
				<td>{this.props.church.address}</td>
			</tr>
		)
	}
}
export default Church;