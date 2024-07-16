import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
       
        <footer id='contact' className={styles.container} >
            <div className={styles.text}>
                <h2 >Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <MdEmail className={styles.icon}/>
                    <a href="mailto:delrosaa@tcd.ie" target="_blank" rel="noopener noreferrer"
                    >
                        delrosaa@tcd.ie
                    </a>
                </li>

                <li className={styles.link}>
                    <FaLinkedin className={styles.icon}/>
                    <a href="https://www.linkedin.com/in/audreydelrosa"
                    target="_blank" rel="noopener noreferrer"
                    >
                        linkedin.com/audreydelrosa
                    </a>
                </li>

                <li className={styles.link}>
                    <FaGithubSquare className={styles.icon}/>
                    <a href="https://github.com/audreydel"
                        target="_blank" rel="noopener noreferrer"
                    >
                        github.com/audreydel
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;
