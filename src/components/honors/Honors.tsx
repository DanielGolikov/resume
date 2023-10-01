// Honors.js

import React from 'react';

const Honors = ({person}: { person: Person }) => {
    return (
        <section>
            <h2 className="title">Honors & Awards</h2>
            <ul>
                {person.honors.map((honor, index) => (
                    <li key={index}>{honor}</li>
                ))}
            </ul>
        </section>
    );
}

export default Honors;
