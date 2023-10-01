import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/header/Header";
import Skills from "@/components/skills/Skills";
import Profile from "@/components/profile/Profile";
import Experience from "@/components/experience/Experience";
import Education from "@/components/education/Education";
import Honors from "@/components/honors/Honors";
import Certification from "@/components/certification/Certification";
import Organizations from "@/components/organisations/Organisations";
import {useEffect, useState} from "react";
import apiConnector from "@/api/apiConnector";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [data, setData] = useState<Person | null>(null);
    useEffect(() => {
        apiConnector.getData("items/1")
            .then((response) => {
                setData(response as Person);
            })
            .catch((error) => console.error(error));
    }, []);
    if (!data) {  // If data is null, return a loading screen
        return <div></div>;
    }
    return (
        <div className={styles.App}>
            <div className={`${styles.column} ${styles.column1}`}>
                <Header person={data}/>
                <Skills person={data}/>
            </div>
            <div className={`${styles.column} ${styles.column2}`}>
                <Profile person={data}/>
                <Experience person = {data}/>
                <Education person={data}/>
                <Honors person={data}/>
                <Certification person={data}/>
                <Organizations person={data}/>
            </div>
        </div>
    );
}
