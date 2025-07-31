// Components
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { SkillTag } from '../../components/SkillTag/SkillTag.tsx';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const AboutMeSection = () => {
    return <div className="container-about-me-section" data-aos="fade-down">
        <SectionTitle title={"About Me"} />
        <div className="section-bio">
            <p>
                Hello! My name is Dennis, and I’m a Fullstack Software Developer with over 3 years of experience. My background spans professional work, internships, and academic projects, giving me a well-rounded and adaptable skill set. My most recent experience as a Software Engineer at CoStar Group allowed me to work on React, Angular, SASS, HTML, CSS, JavaScript, ASP.NET, Azure, and Git in a production setting. I’m currently seeking new opportunities and excited to contribute to a forward-thinking team.
            </p>
        </div>
        <div className="section-skills">
            <h3>Skills</h3>
            <SkillTag skillName="HTML" />
            <SkillTag skillName="CSS" />
            <SkillTag skillName="JavaScript" />
            <SkillTag skillName="SASS" />
            <SkillTag skillName="Git" />
            <SkillTag skillName="React" />
            <SkillTag skillName="Python" />
            <SkillTag skillName="SQL" />
            <SkillTag skillName="Angular" />
            <SkillTag skillName="Postman" />
            <SkillTag skillName="C#/ASP.NET" />
            <SkillTag skillName="Svelte" />
            <SkillTag skillName="Node.js" />
            <SkillTag skillName="Express.js" />
        </div>
        <h3 className="title-link-to-resume">Link to Google Drive Resume</h3>
        <div className="section-resume">
            <button className="btn-resume">
                <a 
                    href="https://drive.google.com/file/d/1O3dFRXze9ps0njZ24rnT6kSyv1_e4hFh/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer">
                    Resume
                </a>   
            </button>
        </div>
        <h3 className="title-link-contact">Contact Me</h3>
        <div className="section-links">
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
    </div>
}