import React from 'react';
import './Churches.css';
import nl2br from 'react-newline-to-break'; 
import '../../pages/Members/Members.css';
import Member from '../../pages/Members/Member';

class Citylife extends React.Component {

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
        let city = "Citylife is a non-denominational church located most ideally to Harvard College. Headed by Lead Pastor Adam Mabry, Aletheia Church is perfect for those new to faith. It is also perfectly located for those looking to eat a delicious meal after service with its location close to Boston Chinatown.\n";
        let direct = "\nFrom Harvard Yard:\n\nWalk to Adam's Oaktel near Hong Kong Restaurant and walk along Mass Ave for approximately 1 mile.\n";
        let web = "aletheia.org\n";
        return (
            <div className="churches-outer-container">
            <div className="churches-inner-container">
                <div className="churches-body">
                <h1 style={{textAlign: "left"}}> 
                    Citylife 
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
                </div>    
            </div> 
            

                <div className="members-outer-container">
                <div className="members-inner-container">
                    <div className="members-body">
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
export default Citylife;