import React from 'react';

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'


class Home extends React.Component {
    render() {
        return(
         <div className="image">
            <div className="home-outer-container">
                <div className="home-inner-container">
                    <div className='text'>
                    <h1 style = {{color: 'black' }}> Welcome to Website </h1>
                    <Link to="/addmembers"> 
                     <Button variant="light" size="lg" block> Interested? Click here to join AACF!</Button> 
                     </Link>         
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;