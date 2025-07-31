import React from 'react';
import 'react-dom';
import Experience from '../../components/Experience/Experience.tsx';
import aboutMeBackground from '../../assets/img/loopnet.png';
import dsgLogo from "../../assets/img/dsg_logo.jpg";
import rccLogo from '../../assets/img/rcc_logo.png';
import theCoderSchoolLogo from '../../assets/img/thecoderschool.jpg';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const HomeExperienceSection = (props) => {
    return <div>
        <SectionTitle title={"Work Experience"}></SectionTitle>
        <Experience
            srcUrl={aboutMeBackground}
            imgAltText={"LoopNet Company Logo"}
            titleRedirectUrl={"https://loopnet.com/"}
            title={"CoStar Group (LoopNet)"}
            jobTitle={"Software Engineer II"}
            yearsWorked={"January 2022 - March 2025"}
            description={"As a Full Stack Developer at CoStar Group (LoopNet subsidiary specifically), I worked on several internal and client-facing projects. This included working on the Search Result Page, Listing Detail Page, and LoopLink teams. The technologies I worked with are React, Angular, TypeScript, JavaScript, SQL, Git, C#, ASP.NET, PostMan, Fiddler, Azure, and SASS."}>
        </Experience>
        <Experience
            srcUrl={dsgLogo}
            imgAltText={"DICK'S Sporting Goods Company Logo"}
            titleRedirectUrl={"https://www.dickssportinggoods.com/"}
            title={"DICK'S Sporting Goods"}
            jobTitle={"Platform Engineering Intern"}
            yearsWorked={"June 2021 - August 2021"}
            description={"As a Platform Engineering Intern at DICK'S Sporting Goods, I worked closely with my training manager and other team members of the Platform Engineering team. I worked on creating a CI/CD pipeline to automate onboarding other teams within the company with Azure resources."}>
        </Experience>
        <Experience
            srcUrl={rccLogo}
            imgAltText={"American Red Cross Club at UCI Logo"}
            titleRedirectUrl={"https://www.rccatuci.club/"}
            title={"American Red Cross Club at UCI"}
            jobTitle={"Webmaster"}
            yearsWorked={"June 2020 - June 2021"}
            description={"As the Webmaster of the American Red Cross Club, I maintained the website of the site and participated in administrative decision-making for the club. I have created two applications during my time as Webmaster to increase quality of life and incorporate more efficiency within the club. My proudest accomplishment as the Webmaster of the club was being able to create a desktop application that significantly reduces time spent on inputting general member points for the club."}>
        </Experience>
        <Experience
            srcUrl={theCoderSchoolLogo}
            imgAltText={"theCoderSchool Logo"}
            titleRedirectUrl={"https://www.thecoderschool.com/locations/yorbalinda/"}
            title={"theCoderSchool"}
            jobTitle={"Coding Instructor"}
            yearsWorked={"September 2020 - June 2021"}
            description={"As a Coding Coach at theCoderSchool, I mentored students ages 8-18 in programming languages such as Python, HTML, CSS, and JavaScript. I also introduced students who have never programmed before to block-based languages such as Scratch. At the end of each lesson, I prepared a summary of the tasks completed and core concepts learned during the day to update the parents on the constant, measurable growth the student is attaining."}>
        </Experience>
    </div>;
}