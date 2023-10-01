// Organizations.js

import React from 'react';

const Organizations = ({person}: { person: Person }) => {
    return (
        <section>
            <h2 className={"title"}>Organizations</h2>
            {person.organisations.map((detail, index) => (
                <div key={index}>
                    <h3>{detail.name}</h3>
                    <p>{detail.position} · {detail.dates}</p>
                    <p>{detail.description}</p>
                </div>
            ))}

        </section>
    );
}

export default Organizations;
