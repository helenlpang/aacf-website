import React from 'react';
import './Churches.css';
import nl2br from 'react-newline-to-break'; 
import '../../pages/Members/Members.css';
import Member from '../../pages/Members/Member';
import 'react-bootstrap'


class City extends React.Component {

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
        let city = `Citylife is a Presbyterian church found a couple minutes away from Park street.
        With a high view of Scripture, Citylife adheres to a Reformed view of the Bible
        and the parts of their service are also oriented around Scripture. Citylife is
        on the traditional side; however they still have many contemporary elements such as a praise band and modern songs along with hymns. Head Pastor Stephen Um gives sermons and so does Assistant Pastor David Cho. If you're looking for a church deeply rooted in Scripture, be sure to check out Citylife! \n`;
        let direct = `\nFrom John Harvard Statue:\n\nWalk to the T station in Harvard Square. 
        Get off at Park Street stop. Walk straight, past Boloco until you reach the Revere hotel. Go up to the 5th floor.\n`;
        let web = "citylifeboston.org\n";
        return (
            <div className="churches-outer-container">
            <div className="churches-inner-container">
                <div className="churches-body">
            
            <div>

                 
                <h1 style={{textAlign: "left"}}> 
                    Citylife 
               </h1>

                <p>
                    {nl2br(city)}
                    Website: <a href="http://www.citylifeboston.org/">{nl2br(web)}</a>
                </p>
                <h2>
                    Directions
                </h2>
                <p>
                    {nl2br(direct)}
                </p>
                <h3>
                    Meetup: John Harvard Statue at 9:45am. 
                </h3>

                {/* <div className="members-outer-container">
                <div className="members-inner-container">
                    <div className="members-body"> */}
                        <h1>Citylife Attendees </h1>
                        <table>
                            <tbody>
                            
                                {this.state.members.map(member => {
                                    if(member.church === "Citylife")
                                        return <Member member={member} key={member.email}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
            </div>           
            
        );
    };
}


export default City;