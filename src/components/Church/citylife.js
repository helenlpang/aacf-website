import React from 'react';
import './Churches.css';
import nl2br from 'react-newline-to-break'; 

class Citylife extends React.Component {
    render() {
        let city = "Citylife is a presbyterian church located in the heart of Boston. Headed by Dr. Stephen Um and Pastor David Cho, Citylife features structured programming and hymms. It is also perfectly located for those looking to eat a delicious meal after service with its location close to Boston Chinatown.\n";
        let direct = "\nFrom Harvard Yard:\n\nTake the MBTA's Red Line inbound to either Ashmont or Braintree and get off at Park Street.\n";
        let web = "citylifeboston.org\n";
        return (
            <div>
                <h1 style={{textAlign: "left"}}> 
                    Citylife 
                </h1>
                <p>
                    {nl2br(city)}
                    Website: <a href="citylifeboston.org">{nl2br(web)}</a>
                </p>
                <h2>
                    Directions
                </h2>
                <p>
                    {nl2br(direct)}
                </p>
                <h3>
                    Meetup: 9:45 am at the John Harvard Statue
                </h3>

            </div>         
        );
    };
}

export default Citylife;