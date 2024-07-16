import React, {useState} from 'react';
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils';
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <a className={styles.title}  href="/">Audrey Del Rosario</a>
                    <img className={styles.menuBtn} 
                    src={ 
                        menuOpen? 
                        getImageUrl('nav/closeIcon.png') 
                        : 
                        getImageUrl('nav/menuIcon.png')} 
                        alt="menu-button" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        />
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#experience">Experience</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
            </div>

            <div className={styles.right}>
                <a href="mailto:delrosaa@tcd.ie"
                    target="_blank" rel="noopener noreferrer"
                >
                    <MdEmail className={styles.link}/>
                </a>
                <a href="https://www.linkedin.com/in/audreydelrosa"
                    target="_blank" rel="noopener noreferrer"
                >
                    <FaLinkedin className={styles.link}/>
                </a>
                <a href="https://github.com/audreydel"
                    target="_blank" rel="noopener noreferrer"
                >
                    <FaGithubSquare className={styles.link}/>
                </a>
            </div>
            
        </nav>
    );
};

export default Navbar;