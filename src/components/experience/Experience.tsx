// Experience.js

import React from 'react';
// import styles from './experience.module.css';


const Experience = ({person}: { person: Person }) => {
    return (
        <section>
            <h2 className="title">Employment History</h2>
            {person.experience.map((job, index) => (
                <div key={index}>
                    <h4>{job.name}</h4>
                    <p className="dates">{job.date}</p>
                    <ul>
                        {job.responsibilities.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Experience;
