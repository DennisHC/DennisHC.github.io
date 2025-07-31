// This section is currently unused
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const ResumeSection = (props) => {
    return <div>
        <SectionTitle title={"Resume"}/>
        <p>Here is the link to my resume!</p>
        <button className="btn-resume">
            <a 
                href="https://drive.google.com/file/d/1O3dFRXze9ps0njZ24rnT6kSyv1_e4hFh/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer">
                My Resume
            </a>   
        </button>
    </div>
}