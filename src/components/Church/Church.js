import React from 'react';

import './Church.css';

class Church extends React.Component {
	render() {
		return (
			<tr className="church-profile" 	key={this.props.church.id}>
<<<<<<< HEAD
				<td>{this.props.church.name}</td>
				<td>{this.props.church.denomination}</td>
=======
				<td>{this.props.church.url}</td>
				<td>{this.props.church.denomination}</td>
				<td>{this.props.church.address}</td>
>>>>>>> bae05448596d5f9d53541a98600c72e8293181f3
			</tr>
		)
	}
}
export default Church;