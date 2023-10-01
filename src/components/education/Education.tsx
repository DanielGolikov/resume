// education.js

import React from 'react';

const Education = ({person}: { person: Person }) => {
    return (
        <section>
            <h2 className="title">Education</h2>
            {person.education.map((degree, index) => (
                <div key={index}>
                    <h3>{degree.name}</h3>
                    <p className="dates">{degree.date}</p>
                    <ul>
                        {degree.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Education;
