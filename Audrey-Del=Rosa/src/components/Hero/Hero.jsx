import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import Image from 'react-bootstrap/Image';
import { MdMailOutline } from "react-icons/md";

const Hero = () => {
    return (
        <section className={styles.container} >
            <div className={styles.content} >
                <Image src={getImageUrl("hero/me.png")}
                    roundedCircle
                    alt="Hero Image of me" 
                    className={styles.heroImg}
                />
                <h1  className={styles.title}>hi, i'm audrey</h1>
                    <p className={styles.description}>I'm a 3rd year Computer Science & Business student based in Dublin, Ireland. 
                        I have a wide range of interests from Full Stack Development, AI, Finance, and UI Design! </p>
                <a href="mailto:delrosaa@tcd.ie"
                target="_blank" rel="noopener noreferrer"
                className={styles.contactBtn}>
                    <MdMailOutline/>
                    <p className={styles.btnText}>reach out :)</p>
                </a>
            </div>
            
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};

export default Hero;