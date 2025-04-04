import React from 'react';


// Define an interface for climber data
interface Boulderers {
    name: string;
    age: number;
    v17s: number;
}

// Data for the top 5 all-time climbers
const bestClimbers: Boulderers[] = [
    {name: "Adam Ondra", age: 38, v17s: 1 },
    {name: "Will Bosi", age: 26, v17s: 5 },
    {name: "Jakob Schubert", age: 27, v17s: 1 },
    {name: "Noah Wheeler", age: 28, v17s: 2 },
    {name: "Aidan Roberts", age: 35, v17s: 2 }
];

const Table: React.FC = () => {
    return (
        <div>
            <h2>Top 5 Current Boulderers</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>V17's Climbed</th>
                </tr>
                </thead>
                <tbody>
                {bestClimbers.map((climber) => (
                    <tr key={climber.name}>
                        <td>{climber.name}</td>
                        <td>{climber.age}</td>
                        <td>{climber.v17s}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
