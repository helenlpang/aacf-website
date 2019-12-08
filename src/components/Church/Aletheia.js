import React from 'react';
import './Churches.css';
import nl2br from 'react-newline-to-break'; 

class Aletheia extends React.Component {
    render() {
        let city = "Aletheia is a non-denominational church located most ideally to Harvard College. Headed by Lead Pastor Adam Mabry, Aletheia Church is perfect for those new to faith. It is also perfectly located for those looking to eat a delicious meal after service with its location close to Boston Chinatown.\n";
        let direct = "\nFrom Harvard Yard:\n\nWalk to Adam's Oaktel near Hong Kong Restaurant and walk along Mass Ave for approximately 1 mile.\n";
        let web = "aletheia.org\n";
        return (
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
            </div>         
        );
    };
}

export default Aletheia;