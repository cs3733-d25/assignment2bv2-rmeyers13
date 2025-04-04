import React from 'react';

const NbaSurvey: React.FC = () => {
    return (
        <div>
            <h2>Submit the Survey to test Ball Knowledge.</h2>
            <form action="#">
                {/* Full Name Input */}
                <label htmlFor="fullname">Enter your full name:</label>
                <input type="text" id="fullname" />
                <br /><br />

                {/* Checkbox Section */}
                <h3>Check if true, leave blank if false:</h3>
                <input type="checkbox" id="nbaFollower" />
                <label htmlFor="nbaFollower">True or False: I personally follow the NBA.</label>
                <br />
                <input type="checkbox" id="lebron" />
                <label htmlFor="lebron">True or False: LeBron James is the GOAT.</label>
                <br />
                <input type="checkbox" id="billRussell" />
                <label htmlFor="billRussell">True or False: Bill Russell has 10 rings.</label>
                <br />

                {/* Dropdown Selection */}
                <h3>Select from the Dropdown:</h3>
                <label htmlFor="melo">Select the real "Melo":</label>
                <select id="melo">
                    <option value="Carmelo">Carmelo</option>
                    <option value="Lamelo">Lamelo</option>
                    <option value="Lonzo">Lonzo</option>
                    <option value="Liangelo">Liangelo</option>
                </select>

                {/* Fill in the Blank */}
                <h3>Fill in the Blank:</h3>
                <label htmlFor="wetBanana">What team does Victor Wetbananas play for?</label>
                <input type="text" id="wetBanana" />
                <br />
                <label htmlFor="mvp">Which NBA player won MVP in 2015?</label>
                <input type="text" id="mvp" />
                <br /><br />

                {/* Radio Buttons */}
                <h3>Who is the Celtic's best player?</h3>
                <input type="radio" id="jaysonTatum" name="bestCeltic" value="Jayson Tatum" />
                <label htmlFor="jaysonTatum">Jayson Tatum</label><br />
                <input type="radio" id="alHorford" name="bestCeltic" value="Al Horford" />
                <label htmlFor="alHorford">Al Horford</label><br />
                <input type="radio" id="jaylenBrown" name="bestCeltic" value="Jaylen Brown" />
                <label htmlFor="jaylenBrown">Jaylen Brown</label>

                {/* Text Area */}
                <h3>In the textbox below, list as many random role players you know (each separated by a comma and space).</h3>
                <textarea rows={10} cols={100} name="role" defaultValue="Enter names here (ex. player1, player2, etc.)" />

                <br />
                {/* Submit Button */}
                <input type="submit" value="Submit" id="submitButton" />
            </form>
        </div>
    );
};

export default NbaSurvey;
