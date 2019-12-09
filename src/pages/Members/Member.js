import React from 'react';
import './Member.css';

class Member extends React.Component {
    //each member is displayed in a table with their first name, last name, email, church, and year
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