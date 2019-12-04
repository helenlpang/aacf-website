import React from 'react';

import Map from '../../components/Map/Map';

const churches = [
    ["Aletheia Church", "820 Massachusetts Ave, Cambridge, MA 02139", "Non-Denominational", "Aletheia is a church in the historic, orthodox, tradition of the Reformation. However, Aletheia adopts a more contemporary style to their worship. Led by Pastor Adam Mabry, Aletheia is located between Harvard and MIT. Naturally, this attracts many college-aged students to the church, though it is not only limited to college-aged students, as there are working young adults and families as well. If you're looking for fellow college-aged students, an experiential praise set, and a convicting sermon, check out Aletheia."],
    ["Symphony Church", "971 Commonwealth Avenue, Boston, MA 02215", "Non-Denominational", "Though"],
    ["CityLife Presbyterian Church", "10 Milk St #230, Boston, MA 02108", "Presbyterian"],
    ["Cambridge Community Fellowship Church (CCFC)", "234 Franklin St, Cambridge, MA 02139", "Evangelical"],
    ["Highrock Church", "50 Quincy St, Cambridge, MA 02139", "Evangelical"],
    ["Park Street Church", "1 Park St, Boston, MA 02108", "Evangelical"],
    ["Pentecostal Tabernacle", "56 Magazine St, Cambridge, MA 02139", "Assemblies of God"],
    ["Hope Fellowship Church", "16 Beech St, Cambridge, MA 02140", "Baptist"],
    ["St. Paul Parish", "29 Mt Auburn St, Cambridge, MA 02138", "Catholic"],
    ["Hillsong Church Boston", "279 Tremont St, Boston, MA 02116", "Non-Denominational"],
    ["Menonnite Congregation of Boston", "1555 Massachusetts Ave, Cambridge, MA 02138", "Menonnite"]
]

class Church extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Map /> 
                    I love church
                </div>
                <div> 
                    <ul>
                        {churches.map((name) => {
                            return <li>{name}</li>
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Church;