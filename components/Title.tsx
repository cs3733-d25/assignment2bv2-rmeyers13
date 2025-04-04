import React from 'react';

interface TitleProps {
    team: string;
    hobbies: string[];
}

const Title: React.FC<TitleProps> = ({ team, hobbies }) => {
    return <h1>{team}: {hobbies.join(" and ")}</h1>;
};

export default Title;
