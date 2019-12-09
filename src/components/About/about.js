import React from 'react';
import nl2br from 'react-newline-to-break'; 
import './about.css';

class About extends React.Component {
	render() {
        let city = 'Harvard-Radcliffe Asian American Christian Fellowship, or AACF for short, is a campus fellowship for members of Harvard College. The goal of AACF is to be the leading voice of Christianity among Asian-Americans. From weekly large groups to frosh studies and community groups, AACF seeks to be a space for intellectual discussion of faith as well as a tight-knit community to all. To get connected and recieve details of our events fill out your information by clicking Join AACF! on the top right hand corner. Anyone is welcome to join even if you are not Asian-American or Christian! ';
		return (
            <div>
                <h1 className="about-head"> 
                    About Us
                </h1>
                <img className="about-image" src={'/photogallery/aacfpic4.jpg'} alt="AACF"/>
                <p>
                    {nl2br(city)}
                </p>
            </div>        
        );
	}
}
export default About;