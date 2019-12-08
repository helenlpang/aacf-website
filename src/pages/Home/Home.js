import React from 'react';

import './Home.css';
import Image from './background-image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
            <div className="home-outer-container">
                <div className="home-inner-container">
                    <div className="home-body">
                        <div className="image">
                            <img src={Image} alt="AACF" />
                        </div>
                        <h1>
                            Welcome to the website for the Harvard-Radcliffe 
                            Asian-American Christian Fellowship (AACF)!
                        </h1>
                        <p>
                            The mission of AACF is to know God and make God known. 
                            Our desire is to be a voice of faith among the Asian 
                            community at Harvard. We aim to be a relational community 
                            that loves the campus with the love we have received from God. 
                            Along with our sister fellowships, Soul Food Fellowship and 
                            the Harvard-Radcliffe Christian Fellowship, we seek to embody 
                            Intervarsity's core values and doctrinal basis.
                        </p>
                        <p>
                            Join us for food, worship, testimonies, and fun! Come hang 
                            out with us at one of our weekly small group Bible studies 
                            (Frosh Study or Family Group) or at our weekly Friday Large 
                            Groups! We also hold frequent community events, as well as 
                            retreats throughout the year.
                        </p>

                       
                        <Link to="/addmembers"> 
                        <Button variant="light" size="lg" block> Interested? Click here to join AACF!</Button> 
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;