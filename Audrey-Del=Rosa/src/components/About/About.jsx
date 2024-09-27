import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import { FaCodeBranch } from "react-icons/fa6";
import { GiSewingMachine } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
    return (
        <section className={styles.container} id="about" >
            <h2 className={styles.title}>about me</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemIcon}>
                            <FaLaptopCode className={styles.aboutItemIconLaptop}/>
                        </div>
                        
                        <div  className={styles.aboutItemText}>
                            <h3>Work & College </h3>
                            <ul>
                                <li>
                                I was a recent a Software Engineering Intern at Dell Technologies. 
                                </li>
                                <li>
                                I am an incoming 3rd year Computer Science & Business 
                                student at Trinity College Dublin. 
                                </li>
                                <li>
                                Some languages I've worked with are Java, Python, C++ , JavaScript 
                                 
                                </li>
                            </ul>
                            
                                
                        </div>
                    </li>
                    <li  className={styles.aboutItem}>
                        <div>
                            <FaCodeBranch className={styles.aboutItemIconNetwork}/>
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Development </h3>
                            <ul>
                                <li>
                                    I enjoy building end-to-end Full Stack applications in industry 
                                    settings & in my personal time. 
                                </li>
                                <li>
                                Starting off with an idea to solve a problem 
                                    to designing the UI to coding up a solution.
                                </li>
                            </ul>
                                
                                
                            
                        </div>
                    </li>
                    

                    

                    <li  className={styles.aboutItem}>
                        <div>
                            <GiSewingMachine className={styles.aboutItemIconSew}/>
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3>Other Hobbies   </h3>
                            <ul>
                                <li>Outside of work and academics, I enjoy sewing clothes, drawing, and reading.
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default About;