import 'react-dom';
import 'aos/dist/aos.css';
import '../../styles/home.scss';
import '../../styles/global.scss';

import { HomeExperienceSection } from './HomeExperienceSection.tsx';
import { ProjectSection } from './ProjectSection.tsx';
import { ContactMeSection } from './ContactMeSection.tsx';
import { AboutMeSection } from './AboutMeSection.tsx';
import { ResumeSection } from './ResumeSection.tsx';
import { CourseWorkSection } from './CourseWorkSection.tsx';


export const Home = (props) => {
    return <div>
        <AboutMeSection />
        <ProjectSection />
        <HomeExperienceSection />
        <CourseWorkSection />
        <ContactMeSection />
    </div>
};