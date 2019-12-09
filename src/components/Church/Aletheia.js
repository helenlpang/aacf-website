import React from 'react';
import './Churches.css';
import nl2br from 'react-newline-to-break'; 
import '../../pages/Members/Members.css';
import Member from '../../pages/Members/Member';
import "./Churches.css"
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
        let city = `Aletheia is a non-denominational church located between MIT and Harvard. Because of this, many undergraduates from both Harvard and MIT go to Aletheia. Led by Pastor Adam Marbury, Aletheia is a fast-growing church with a mission to equip and teach members with the gospel. Aletheia adopts a more contemporary style of worship, and also attracts a diverse membership body. Pastor Adam is known for his applicable and convicting sermons, and the worship band is always prepared with contemporary music styles. If you're looking for a great service at a terrific location, check out Aletheia. \n`;
        let direct = "\nFrom Harvard Yard:\n\nWalk to Adam's Oaktel near Hong Kong Restaurant and walk along Mass Ave for approximately 1 mile.\n";
        let web  = "aletheia.org\n";
        return (
            <div className="churches-outer-container">
            <div className="churches-inner-container">
                <div className="churches-body">
            <div>
                <h1 style={{textAlign: "left"}}> 
                    Aletheia 
                </h1>
                <p>
                    {nl2br(city)}
                    Website: <a href="https://www.aletheia.org/">{nl2br(web)}</a>
                </p>
                <h2>
                    Directions
                </h2>
                <p>
                    {nl2br(direct)}
                </p>
                <h3>
                    Meetup: Outside Hong Kong restuarant 15 minutes before service starts
                </h3>

                {/* <div className="members-outer-container">
                <div className="members-inner-container">
                    <div className="members-body"> */}
                        <h1>Aletheia Attendees </h1>
                        <table>
                            <tbody>
                            
                                {this.state.members.map(member => {
                                    if(member.church === "Aletheia")
                                        return <Member member={member} key={member.email} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>         
        );
    };



// class Aletheia extends React.Component {
//     state = {
//         members: []
//     };

//     componentDidMount() {
//         this.fetchMembers();
//     }

//     fetchMembers() {
//         const requestBody = {
//             query: `
//                 query {
//                     members {
//                         firstName
//                         lastName
//                         email
//                         church
//                         year
//                     }
//                 }
//             `
//         }

//         fetch('http://localhost:5000/graphql', {
//             method: 'POST',
//             body: JSON.stringify(requestBody),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(res => {
//             return res.json()
//         }).then(resData => {
//             return this.setState({ members: resData.data.members })
//         }).catch(err => {
//             console.log(err);
//         })
//     }

//     render() {

//         return (
//             <div className="members-outer-container">
//                 <div className="members-inner-container">
//                     <div className="members-body">
//                         <h1>Aletheia Attendees </h1>
//                         <table>
//                             <tbody>
                            
//                                 {this.state.members.map(member => {
//                                     if(member.church == "Aletheia")
//                                         return <Member member={member} />
//                                 })}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
}
export default Aletheia;