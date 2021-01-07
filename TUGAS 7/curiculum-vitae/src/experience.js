import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="work-experience">
                <div className="row">
                    <div className="col-1">
                        <h2>PROFILE</h2>
                        <hr />
                        <h3>NAME</h3>
                        <h4>Muhammad Fadlil</h4>
                        <h3>DATE OF BIRTH</h3>
                        <h4>27 Juli 1996</h4>
                        <h3>ADDRESS</h3>
                        <h4>Jl. Sirsak No.53 <br />Kel. Jagakarsa <br />Jakarta Selatan</h4>
                        <h3>WEBSITE</h3>
                        <h4>www.duatujuh.net</h4>
                    </div>
                    <div className="col-2">
                        <h2>WORK EXPERIENCE</h2>
                        <hr />
                        <div className="row-in">
                            <div className="col-2-left">
                                <h3>SIGMA MITRA CONVEX</h3>
                                <h4>From 2015 to 2018</h4>
                            </div>
                            <div className="col-2-right">
                                <h3>MICE COORDINATOR</h3>
                                <p>
                                    As Mice Coordinator <br />
                                    - Handle Event as Project Leader (Event Preparation, Event <br />
                                    Concept, Event Coordinator) <br />
                                    - Quotation Mice : Quot Mice Item Preparation <br />
                                    - Vendor Management : Manage vendor for Event Production
                                </p>
                            </div>
                        </div>
                        <div className="row-in">
                            <div className="col-2-left">
                                <h3>MIKI TRAVEL</h3>
                                <h4>From 2018 to 2019</h4>
                            </div>
                            <div className="col-2-right">
                                <h3>OPERATION EXECUTIVE</h3>
                                <p>
                                    As Operation Executive <br />
                                    - Operate Europe Tour Destination <br />
                                    - Handle LDC, Hotel, Entrance Ticket, and all europe service <br />
                                    related <br />
                                    - Europe Mice Management
                                </p>
                            </div>
                        </div>
                        <div className="row-in">
                            <div className="col-2-left">
                                <h3>ANNISA TRAVEL</h3>
                                <h4>From 2019 to 2020</h4>
                            </div>
                            <div className="col-2-right">
                                <h3>PRODUCT SUPERVISOR</h3>
                                <p>
                                    As Supervisor of Tour Division <br />
                                    - Tour Management Control : Place, Period of tour planning <br />
                                    - Tour Operation control : manage the whole role of tour project <br />
                                    - Sales Planning of Tour : do some research the whole tour plan to <br /> 
                                    sell the product <br />
                                    - Make a sales report and tour report
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Experience;