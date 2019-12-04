import React from 'react';

import './Church.css';

class Church extends React.Component {
	render() {
		return (
			<tr className="church-profile" 	key={this.props.church.id}>
				<td>{this.props.church.name}</td>
				<td>{this.props.church.denomination}</td>
			</tr>
		)
	}
}

{/* <li className="church-profile">
				<p>{this.props.church.name}, {this.props.church.denomination}</p>
			</li> */}

export default Church;