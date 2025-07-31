// Styling
import 'aos/dist/aos.css';
import '../../styles/home.scss';
import '../../styles/global.scss';

// Section Components
import { HomeExperienceSection } from './HomeExperienceSection.tsx';
import { ProjectSection } from './ProjectSection.tsx';
import { AboutMeSection } from './AboutMeSection.tsx';
import { CourseWorkSection } from './CourseWorkSection.tsx';

export const Home = () => {
    return <div>
        <AboutMeSection />
        <HomeExperienceSection />
        <ProjectSection />
        <CourseWorkSection />
    </div>
};