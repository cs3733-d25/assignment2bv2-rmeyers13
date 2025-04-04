import React from 'react';


// Define an interface for player data
interface Player {
    rank: number;
    name: string;
    age: number;
    position: string;
    totalPoints: number;
}

// Data for the top 5 all-time scorers
const nbaTopScorers: Player[] = [
    { rank: 1, name: "LeBron James", age: 39, position: "SF/PF", totalPoints: 42036 },
    { rank: 2, name: "Kareem Abdul-Jabbar", age: 42, position: "C", totalPoints: 38387 },
    { rank: 3, name: "Karl Malone", age: 40, position: "PF", totalPoints: 36928 },
    { rank: 4, name: "Kobe Bryant", age: 41, position: "SG", totalPoints: 33643 },
    { rank: 5, name: "Michael Jordan", age: 40, position: "SG", totalPoints: 32292 }
];

const Table: React.FC = () => {
    return (
        <div>
            <h2>Top 5 NBA All-Time Total Points Leaders</h2>
            <table>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Total Points</th>
                </tr>
                </thead>
                <tbody>
                {nbaTopScorers.map((player) => (
                    <tr key={player.rank}>
                        <td>{player.rank}</td>
                        <td>{player.name}</td>
                        <td>{player.age}</td>
                        <td>{player.position}</td>
                        <td>{player.totalPoints.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
