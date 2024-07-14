import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

import React from 'react';

const Contact = () => {
    return (
       
        <footer id='contact' className={styles.container} >
            <div className={styles.text}>
                <h2 >Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="email icon" />
                    <a href="mailto:delrosaa@tcd.ie">delrosaa@tcd.ie</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/audreydelrosa">linkedin.com/audreydelrosa</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="github icon" />
                    <a href="https://github.com/audreydel">github.com/audreydel</a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;
