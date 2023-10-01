// Profile.js

import React from 'react';
import styles from "@/components/skills/skills.module.css";


const Profile = ({person}: { person: Person }) => {
    return (
        <section>
            <h2 className="title">Profile</h2>
            {Array.isArray(person.profile) && <ul className={styles.list}>
                {person.profile.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>}
        </section>
    );
}

export default Profile;
