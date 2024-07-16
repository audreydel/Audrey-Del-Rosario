import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import  styles from './ProjectCard.module.css';

const ProjectCard = ({ project : {title, imageSrc, description, skills, demo, source}}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={flipCard}>
                <div className={styles.front}>
                    <div className={styles.top}>
                        <img
                            src={getImageUrl(imageSrc)}
                            alt={`${title} Title`}
                            className={styles.image}
                        />
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                    <ul className={styles.skills}>
                        {skills.map((skill, id) => (
                            <li key={id} className={styles.skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.back}>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.links}>
                        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                            Demo
                        </a>
                        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;