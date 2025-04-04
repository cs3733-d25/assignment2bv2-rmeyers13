import React from 'react';
import ClimbList from './ClimbList';
import TopClimbers from './Topclimbers'
import ClimbingSurvey from './ClimbingSurvey';

const Climbing: React.FC = () => {
    return (
        <div>
            <h2>My Hobby: Climbing</h2>
            <img src="/ondraCLimbing.jpg" alt="Adam Ondra climbing a boulder" />
            <ClimbList />
            <TopClimbers />
            <ClimbingSurvey />
        </div>
    );
};

export default Climbing;
