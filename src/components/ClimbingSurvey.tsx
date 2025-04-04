import React from 'react';

const climbingSurvey: React.FC = () => {
    return (
        <div>
            <h2>Submit this survey to test your climbing knowledge!.</h2>
            <form action="#">
                {/* Full Name Input */}
                <label htmlFor="fullname">Enter your FULL name:</label>
                <input type="text" id="fullname" />
                <br /><br />

                {/* Checkbox Section */}
                <h3>Check if true, leave blank if false:</h3>
                <input type="checkbox" id="climber" />
                <label htmlFor="climber">True or False: I climb at least once a week.</label>
                <br />
                <input type="checkbox" id="boulderer" />
                <label htmlFor="boulderer">TF: I like to climb boulders.</label>
                <br />
                <input type="checkbox" id="leadClimb" />
                <label htmlFor="leadClimb">TF: I like to lead climb.</label>
                <br />

                {/* Dropdown Selection */}
                <h3>Select from the Dropdown:</h3>
                <label htmlFor="goatClimb">Select the best climber of all time:</label>
                <select id="goatClimb">
                    <option value="ondra">Adam Ondra</option>
                    <option value="schubert">Jakob Schubert</option>
                    <option value="bosi">Will Bosi</option>
                    <option value="rabatou">Shaun Rabatou</option>
                </select>

                {/* Fill in the Blank */}
                <h3>Fill in the Blank:</h3>
                <label htmlFor="grade">What is the highest grade you've climbed?</label>
                <input type="text" id="grade" />
                <br />
                <label htmlFor="height">What is the highest you've climbed?</label>
                <input type="text" id="height" />
                <br /><br />

                {/* Radio Buttons */}
                <h3>What is the best climbing shoe brand?</h3>
                <input type="radio" id="Scarpa" name="bestShoe" value="Scarpa" />
                <label htmlFor="Scarpa">Scarpa</label><br />
                <input type="radio" id="La Sportiva" name="bestShoe" value="La Sportiva" />
                <label htmlFor="La Sportiva">La Sportiva</label><br />
                <input type="radio" id="Black Diamond" name="bestShoe" value="Black Diamond" />
                <label htmlFor="Black Diamond">Black Diamond</label>

                {/* Text Area */}
                <h3>In the textbox below, list the most types of holds you can.</h3>
                <textarea rows={10} cols={100} name="holds" defaultValue="Enter names here" />

                <br />
                {/* Submit Button */}
                <input type="submit" value="Submit" id="submitButton" />
            </form>
        </div>
    );
};

export default climbingSurvey;
