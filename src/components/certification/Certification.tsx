// certification.js

import React from 'react';

const Certification = ({person}: { person: Person }) => {
    return (
        <section>
            <h2 className="title">Licenses & Certifications</h2>
            <ul>
                {person.certifications.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </section>
    );
}

export default Certification;
