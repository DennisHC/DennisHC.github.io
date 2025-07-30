import 'react-dom';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { SkillTag } from '../../components/SkillTag/SkillTag.tsx';

export const AboutMeSection = (props) => {
    return <div className="container-about-me-section" data-aos="fade-down">
        <SectionTitle title={"About Me"} />
        <div className="section-bio">
            <p>
                Hello! My name is Dennis, and I’m a Fullstack Software Developer with over 3 years of experience. I specialize in Python, React, JavaScript, CSS, SASS, Git, and SQL. My background spans professional work, internships, and academic projects, giving me a well-rounded and adaptable skill set. I’m currently seeking new opportunities and excited to contribute to a forward-thinking team.
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
        <h3>Link to Google Drive Resume</h3>
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
    </div>
}