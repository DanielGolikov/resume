// Skills.tsx

import React from 'react';
import styles from './skills.module.css';

const Skills = ({person}: {person: Person}) => {
    return (
        <section className={styles.section}>
            <h2 className={`title ${styles.small_title}`}>Skills</h2>
            <ul className={styles.list}>
                {person.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
