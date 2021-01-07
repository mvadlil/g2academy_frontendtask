import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="work-experience">
                <div className="row">
                    <div className="col-1">
                        <h2>AWARD</h2>
                        <hr />
                        <h3>Juara 2 Lomba Cerdas Cermat Japan Fair</h3>
                        <h4>Certificate</h4>
                        <h3>Juara 2 Lomba Bahasa Jepang - Tingkat Provinsi DKI Jakarta</h3>
                        <h4>Certificate</h4>
                        <h3>Sertifikat Lulus LPPK Bahasa Jepang</h3>
                        <h4>Certificate</h4>
                    </div>
                    <div className="col-2">
                        <h2>EDUCATION</h2>
                        <hr />
                        <div className="row-in">
                            <div className="col-2-left">
                                <h3>JUNIOR HIGH SCHOOL</h3>
                                <h4>From 2008 to 2011</h4>
                            </div>
                            <div className="col-2-right">
                                <h3>SMP NEGERI 166 JAKARTA</h3>
                                <p>
                                    Jakarta, Indonesia
                                </p><br /><br /><br />
                            </div>
                        </div>
                        <div className="row-in">
                            <div className="col-2-left">
                                <h3>SENIOR HIGH SCHOOL</h3>
                                <h4>From 2011 to 2014</h4>
                            </div>
                            <div className="col-2-right">
                                <h3>SMK NEGERI 8 JAKARTA</h3>
                                <p>
                                    Jakarta, Indonesia
                                </p><br /><br /><br />
                            </div>
                        </div>
                        <div className="row-in">
                            <div className="col-2-left">
                                <h3>BACHELOR DEGREE</h3>
                                <h4>From 2015 to 2020</h4>
                            </div>
                            <div className="col-2-right">
                                <h3>INSTITUTE OF BUSINESS AND INFORMATICS KOSGORO</h3>
                                <p>
                                    Jakarta, Indonesia
                                </p><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Education;