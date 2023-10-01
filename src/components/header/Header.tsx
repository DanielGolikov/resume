//Header.js

import styles from './header.module.css'
import React from "react";

import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();
function Header({person}: { person: Person }) {
    const s3Url = publicRuntimeConfig.S3URL;
    console.log(s3Url);
    return (
        <header>
            <div className={styles.image_container}>
                <img className={styles.img} src={`${s3Url}/${person.id}.jpg`} alt="Example"/>
            </div>
            <h1 className="title">{person.name}</h1>
            <h2 className={`title ${styles.small_title}`}>Details</h2>
            <p>{person.location}</p>
            <p>{person.phone}</p>
            <p>{person.email}</p>
            <h2 className={`title ${styles.small_title}`}>Links</h2>
            {person.links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            ))}


        </header>
    );
}

export default Header;
