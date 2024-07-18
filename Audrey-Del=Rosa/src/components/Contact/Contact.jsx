import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
       
        <footer id='contact' className={styles.container} >
            <div className={styles.text}>
                <h2 >places to contact me</h2>
                <p>feel free to reach out anytime!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    
                    <a href="mailto:delrosaa@tcd.ie" target="_blank" rel="noopener noreferrer"
                    >
                        <MdEmail className={styles.icon}/>
                        delrosaa@tcd.ie
                    </a>
                </li>

                <li className={styles.link}>
                    
                    <a href="https://www.linkedin.com/in/audreydelrosa"
                    target="_blank" rel="noopener noreferrer"
                    >
                        <FaLinkedin className={styles.icon}/>
                        linkedin.com/audreydelrosa
                    </a>
                </li>

                <li className={styles.link}>
                    <a href="https://github.com/audreydel"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <FaGithubSquare className={styles.icon}/>
                        github.com/audreydel
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;
