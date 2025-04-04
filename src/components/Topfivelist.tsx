import React from 'react';


const nbaTopScorers = [
    { rank: 1, name: "LeBron James", points: 42036 },
    { rank: 2, name: "Kareem Abdul-Jabbar", points: 38387 },
    { rank: 3, name: "Karl Malone", points: 36928 },
    { rank: 4, name: "Kobe Bryant", points: 33643 },
    { rank: 5, name: "Michael Jordan", points: 32292 }
];

const List: React.FC = () => {
    return (
        <div>
            <h2>Top 5 NBA Total Points Leaders</h2>
            <ul>
                {nbaTopScorers.map((player) => (
                    <li key={player.rank}>
                        {player.rank}. {player.name} - {player.points.toLocaleString()} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
