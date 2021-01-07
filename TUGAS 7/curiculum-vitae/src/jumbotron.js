import React, { Component } from 'react';
import profile from './profile.jpg';

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <div className="jumbotron">
                    <p><span>RESUME</span></p>
                    <h1>MUHAMMAD <br />FADLIL</h1>
                </div>
                <div className="profile">
                    <img src={profile} />
                </div>
                <h2 className="job-title">TOUR OPERATOR | MICE COORDINATOR</h2>
                <hr className="hr-title" size="5"></hr>
            </div>
        );
    }
}
 
export default Jumbotron;