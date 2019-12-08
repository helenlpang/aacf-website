import React from 'react';
import './Member.css';

class Member extends React.Component {
    render() {
        return(
            <tr className="members-profile">
                <td>{this.props.member.firstName}</td>
                <td>{this.props.member.lastName}</td>
                <td>{this.props.member.email}</td>
                <td>{this.props.member.church}</td>
                <td>{this.props.member.year}</td>


            </tr>
        )
    }
}

export default Member;