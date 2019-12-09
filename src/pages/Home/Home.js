import React from 'react';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
         <div className="background">
            <div className="home-outer-container">
                <div className="home-inner-container">
                    <div className='text'>
                    <text> 
                        Welcome to AACF 
                    </text>
                    <Link to="/addmembers"> 
                     <Button variant="light" size="lg" block> Interested? Click here to join AACF!</Button> 
                     </Link>      
                     <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
                </div>
                </div>
                </div>
            </div>
        
        )
    }
}

export default Home;