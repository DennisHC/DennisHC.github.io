import 'react-dom';
import '../../styles/home.scss';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const ContactMeSection = (props) => {
    return <div className="container-contact-me-section">
        <SectionTitle title={"Contact Me"}/>
        <p>Feel free to contact me at <strong>dhchuong@uci.edu</strong></p>
        <a href="mailto:dhchuong@uci.edu" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon className={"fa-icon"} icon={faEnvelope} />
        </a>
        <a href="https://github.com/DennisHC" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon className={"fa-icon"} icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/dennischuong" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon className={"fa-icon"} icon={faLinkedin} />
        </a>
    </div>
}