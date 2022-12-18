import React from "react";
import '../styles/education.css';

const Education=()=>{
    return(
        <div className="edu-container">
            <h2>EDUCATIONAL QUALIFICATION</h2>
            <table>
                <thead>
                    <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Institution/Board</th>
                    <th>Percentage</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bachelor of Engineering</td>
                        <td>Mechanical</td>
                        <td className="location">Adhiparasakthi Engineering College, Melmaruvathur, Kancipuram, Tamil Nadu-603 319</td>
                        <td>79.10</td>
                        <td>2015-19</td>
                    </tr>
                    <tr>
                        <td>Higher Secondary</td>
                        <td>Bio-Maths</td>
                        <td className="location">Jayarrajesh Matric Higher Secondary School, Thisayanvillai, Tirunelveli, Tamil Nadu-627 657</td>
                        <td>86</td>
                        <td>2014-15</td>
                    </tr>
                    <tr>
                        <td>SSLC</td>
                        <td>Matriculation</td>
                        <td className="location">Sri Kanchi Sankara Bagavathi Vidyalaya Matriculation School, Kommadikottai, Thoothukudi, Tamil Nadu-628 653</td>
                        <td>91.60</td>
                        <td>2012-13</td>
                    </tr>
                </tbody>
            </table>
            {/* <h2>Graduate</h2> */}
            {/* <div className="edu-content">
                <div>
                <p>Bachelor of Engineering ME</p>
                <p>Adhiparasakthi Engineering College, Melmaruvathur</p>
                </div>
                <p>79.10</p>
                <p>2015-19</p>
            </div>
            <h2>Higher Secondary</h2>
            <div className="edu-content">
                <div>
                <p>Bio-Maths</p>
                <p>Jayarrajesh Matric Higher Secondary School, Tisayanvillai</p>
                </div>
                <p>79.10</p>
                <p>2014-15</p>
            </div>
            <h2>SSLC</h2>
            <div className="edu-content">
                <div>
                <p>Sri Kanchi Sankara Bagavathi Vidyalaya Matric School</p>
                </div>
                <p>79.10</p>
                <p>2012-13</p>
            </div> */}
        </div>
    )
}

export default Education