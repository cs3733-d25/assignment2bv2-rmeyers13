import React from 'react';
import Topfivelist from './Topfivelist';
import Topfivetable from './Topfivetable';
import NbaSurvey from './NbaSurvey';

const Basketball: React.FC = () => {
    return (
        <div>
            <h2>My Hobby: Basketball</h2>
            <img src="/petergriffingreenfn.png" alt="petergriffingreenfn" />
            <Topfivelist />
            <Topfivetable />
            <NbaSurvey />
        </div>
    );
};

export default Basketball;
