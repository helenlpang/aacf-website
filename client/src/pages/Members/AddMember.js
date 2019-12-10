import React from 'react';
import './AddMembers.css';

class AddMember extends React.Component {
    //add member will ask for firstname, lastname, email, church and year
    //constructor creates reference for each field
    constructor() {
        super();    

        this.firstNameEl = React.createRef();
        this.lastNameEl = React.createRef();
        this.emailEl = React.createRef();
        this.churchEl = React.createRef();
        this.yearEl = React.createRef();
    }
    
    handler = () => {
        //stores the current values submittted
        const firstName = this.firstNameEl.current.value;
        const lastName = this.lastNameEl.current.value;
        const email = this.emailEl.current.value;
        const church = this.churchEl.current.value;
        const year = this.yearEl.current.value;

        
        //query
        //mutation: format ${variable} 
        //defines how we can add a member to the database
        const requestBody = {
            query: `
                mutation {
                    addMember (memberInput: {
                        firstName: "${firstName}"
                        lastName: "${lastName}"
                        email: "${email}"
                        church: "${church}"
                        year: "${year}"


                    }) {
                        firstName
                        lastName
                        email
                        church
                        year
                    }
                }
            `
        }

        //access the graphQL server  
        fetch('http://localhost:5000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            throw err;
        })
    }

    //render the actual add members page
    //form: asks for first name, last name, email, church, and year
    //submit button
    render() {
        return (
            <div className="AddMembers-outer-container">
                <div className="AddMembers-inner-container">
                    <div className="AddMembers-body">
                                    <React.Fragment>
                                    <h1 className="heading">Enter your information below to join AACF!</h1>
                                        <form onSubmit={this.handler}>
                                            <div className="form-item">
                                                <label>First Name</label>
                                                <input ref={this.firstNameEl} />
                                            </div>
                                            <div className="form-item">
                                                <label>Last Name</label>
                                                <input ref={this.lastNameEl} />
                                            </div>
                                            <div className="form-item">
                                                <label>Email</label>
                                                <input ref={this.emailEl} />
                                            </div>
                                            <div className="form-item">
                                                <label>Church</label>
                                                <input ref={this.churchEl} />
                                            </div>
                                            <div className="form-item">
                                                <label>Class of</label>
                                                <input ref={this.yearEl} />
                                            </div>
                                            <div className="submit-button">
                                                <button type="submit">Submit</button>
                                            </div>
                                        </form>
                        </React.Fragment>
                    </div>
                </div>
             </div>
        )
    }
}

export default AddMember;