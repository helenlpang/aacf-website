import React from 'react';

class Church extends React.Component {
	render() {
        console.log(this.props.church)
		return (
			<li>
				<h2>{this.props.church.name}</h2>
                <p>{this.props.church.denomination}</p>
			</li>
		)
	}
}

export default Church;