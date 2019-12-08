import React from 'react';
import './Churches.css';
import nl2br from 'react-newline-to-break'; 
import '../../pages/Members/Members.css';
import Member from '../../pages/Members/Member';

class Symphony extends React.Component {

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
        let city = `Symphony is a non-denominational church located near
        Boston University. Symphony's members are almost all Asian-American undergraduates from
        schools around Boston (Boston College, Boston University, Tufts, MIT, etc.).
         One of Symphony's strong points is their community. With weekly bible studies
         and University Worship Nights on Friday, it's easy to get plugged into the
         Symphony community and all the members are welcoming! Planted by Pastor Young Kim,
         Symphony Church is currently led by Pastor Barry. If you're looking for a strong
         faith community as well as a fantastic service experience, be sure to check out 
         Symphony.\n`;
        let direct = `\nFrom the Gate:\n\nContact Isaiah Kim for ride details.\n`;
        let web = "symphonychurch.com\n";
        return (
            <div className="churches-outer-container">
            <div className="churches-inner-container">
                <div className="churches-body">
            <div>
                <h1 style={{textAlign: "left"}}> 
                    Symphony 
                </h1>
                <p>
                    {nl2br(city)}
                    Website: <a href="https://www.symphonychurch.com/">{nl2br(web)}</a>
                </p>
                <h2>
                    Directions
                </h2>
                <p>
                    {nl2br(direct)}
                </p>
                <h3>
                    Contact Isaiah Kim for ride details. 
                </h3>

                {/* <div className="members-outer-container">
                <div className="members-inner-container">
                    <div className="members-body"> */}
                        <h1>Symphony Attendees </h1>
                        <table>
                            <tbody>
                            
                                {this.state.members.map(member => {
                                    if(member.church === "Symphony")
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
export default Symphony;