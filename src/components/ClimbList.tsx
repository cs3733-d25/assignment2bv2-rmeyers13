import React from 'react';


const hardestBoulders = [
    { rank: 1, name: "Burden of Dreams", grade: "v17" },
    { rank: 2, name: "Soudain Seul", grade: "v17" },
    { rank: 3, name: "Return of the Sleepwalker", grade: "v17" },
    { rank: 4, name: "Megatron", grade: "v17" },
    { rank: 5, name: "Alphane", grade: "v17" }
];

const List: React.FC = () => {
    return (
        <div>
            <h2>Top 5 Hardest Boulders</h2>
            <ul>
                {hardestBoulders.map((climb) => (
                    <li key={climb.rank}>
                        {climb.rank}. {climb.name} - {climb.grade} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
