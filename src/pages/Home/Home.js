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
<<<<<<< HEAD
                    <text> 
=======
                    <text style = {{color: 'white'}}> 
>>>>>>> b39d1e12a0f2d5c936b494b1d726c6a5a7f0fec2
                    Welcome to AACF </text>
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