import React, {useState} from 'react';
import styles from './Navbar.module.css'
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { Tooltip } from 'react-tooltip'
import { IoIosPaper } from "react-icons/io";
import { TbMailOpenedFilled } from "react-icons/tb";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <a className={styles.title}  href="/">Audrey Del Rosario</a>
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <li> <a href="#about">About</a> </li>

                        <li> <a href="#experience">Experience</a> </li>

                        <li> <a href="#projects">Projects</a> </li>

                        <li> <a href="#contact">Contact</a> </li>
                    </ul>
                    
            </div>

            <div className={styles.right}>
                <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen? <IoCloseOutline className={styles.icon} /> : <IoMenu className={styles.icon}/>
                    }
                </div>
                <a href="mailto:delrosaa@tcd.ie"
                    target="_blank" rel="noopener noreferrer"
                    data-tooltip-id="mail-tip"
                    data-tooltip-content="my email"
                    data-tooltip-place="bottom"
                >
                    <TbMailOpenedFilled className={styles.link}/>
                </a>

                <Tooltip id="mail-tip"/>
                <a href="https://www.linkedin.com/in/audreydelrosa"
                    target="_blank" rel="noopener noreferrer"
                    data-tooltip-id="linkedin-tip"
                    data-tooltip-content="my linkedin"
                    data-tooltip-place="bottom"
                >
                    <FaLinkedin className={styles.link}/>
                </a>
                <Tooltip id="linkedin-tip"/>

                <a href="https://github.com/audreydel"
                    target="_blank" rel="noopener noreferrer"
                    data-tooltip-id="github-tip"
                    data-tooltip-content="my github"
                    data-tooltip-place="bottom"
                >
                    <FaGithubSquare className={styles.link}/>
                </a>
                <Tooltip id="github-tip"/>

                <a href="../../assets/cv/ADR-CV.pdf"
                    target="_blank" rel="noopener noreferrer"
                    data-tooltip-id="cv-tip"
                    data-tooltip-content="my cv"
                    data-tooltip-place="bottom"
                >
                    <IoIosPaper className={styles.link}/>
                </a>
                <Tooltip id="cv-tip"/>
                
            </div>
            
        </nav>
    );
};

export default Navbar;