import React from "react";

interface IntroProps {
    name: string;
    nameagain: string;
}

const Intro: React.FC<IntroProps> = ({ name, nameagain }) => {
    return <p>Welcome! This webpage was made by {name} and {nameagain}.</p>;
};

export default Intro;