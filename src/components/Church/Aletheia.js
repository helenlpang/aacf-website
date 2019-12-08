import React from 'react';

import '../../pages/Members/Members.css';
import Member from '../../pages/Members/Member';

class Aletheia extends React.Component {
    state = {
        members: []
    };

    componentDidMount() {
        this.fetchMembers();
    }

    fetchMembers() {
        const requestBody = {
            query: `
                query {
                    members {
                        firstName
                        lastName
                        email
                        church
                        year
                    }
                }
            `
        }

        fetch('http://localhost:5000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(resData => {
            return this.setState({ members: resData.data.members })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {

        return (
            <div className="members-outer-container">
                <div className="members-inner-container">
                    <div className="members-body">
                        <h1>Aletheia Attendees </h1>
                        <table>
                            <tbody>
                            
                                {this.state.members.map(member => {
                                    if(member.church == "Aletheia")
                                        return <Member member={member} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aletheia;