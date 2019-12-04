import React from 'react';

import './Church.css';

class Church extends React.Component {
	render() {
		return (
			<li className="church-profile">
				<p>{this.props.church.name}, {this.props.church.denomination}</p>
			</li>
		)
	}
}

export default Church;