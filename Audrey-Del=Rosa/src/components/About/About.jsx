import { getImageUrl } from '../../utils';
import styles from './About.module.css';

import React from 'react';

const About = () => {
    return (
        <section className={styles.container} id="about" >
            <h2 className={styles.title}>About Me!</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} 
                                alt="cursorIcon" 
                        />
                        <div  className={styles.aboutItemText}>
                            <h3>Frontend Developer   </h3>
                            <p>I'm a frontend develoer with expeirnce buiilding
                                websites that slay 
                            </p>
                        </div>
                    </li>

                    <li  className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} 
                                alt="cursorIcon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer   </h3>
                            <p>I have experience developing fast & optimised backend 
                                systems & APIs
                            </p>
                        </div>
                    </li>

                    <li  className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} 
                                alt="uil" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer  </h3>
                            <p>I have designed multiple landing pages & having experience creating design systems as well
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default About;