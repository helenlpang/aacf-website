import React from 'react';

import './Members.css';
import Member from './Member';

class Members extends React.Component {
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
                        <h1>AACF Freshman </h1>
                        <table>
                            <tbody>
                                {this.state.members.map(member => {
                                    if(member.year === "2023")
                                    return <Member key={member.email} member={member} />
                                })}
                            </tbody>
                        </table>
                        <h1>AACF Sophomores </h1>
                        <table>
                            <tbody>
                                {this.state.members.map(member => {
                                    if(member.year === "2022")
                                    return <Member key={member.email} member={member} />
                                })}
                            </tbody>
                        </table>
                        <h1>AACF Juniors </h1>
                        <table>
                            <tbody>
                                {this.state.members.map(member => {
                                    if(member.year === "2021")
                                    return <Member key={member.email} member={member} />
                                })}
                            </tbody>
                        </table>
                        <h1>AACF Seniors </h1>
                        <table>
                            <tbody>
                                {this.state.members.map(member => {
                                    if(member.year === "2020")
                                    return <Member key={member.email} member={member} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;