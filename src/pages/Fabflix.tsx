// Styling
import 'aos/dist/aos.css';
import '../styles/fabflix.scss';

// Components
import { ProjectDetailPageTitle } from '../components/ProjectDetailPageTitle/ProjectDetailPageTitle.tsx';
import { Container } from '../components/Container/Container.tsx';
import { BackButton } from '../components/BackButton/BackButton.tsx';

// GIfs and IMGs
import FabflixDemoGif from '../assets/gif/fabflix_basic_demo.gif';
import FabflixMobileDemoGif from '../assets/gif/fabflix_mobile_demo_1.gif';
import FabflixSystemArchitecture from '../assets/img/fabflix_system_architecture.png';

export const Fabflix = () => {
    return <div>
        <BackButton/>
        <ProjectDetailPageTitle title={"CS 122B Project — Fabflix"} />
        <Container title={"Introduction"} data-aos="fade-right">
            <p>Fabflix is a full-stack web-based application designed by Dennis Chuong and Michael Lofton for COMPSCI 122B: Project in Web Design, an upper division course offered at the University of California, Irvine. During the span of 11 weeks, we developed the front-end and back-end of this website, utilizing HTML, CSS, Bootstrap, JavaScript, jQuery, Java, JDBC, MySQL, Tomcat, Maven, and AWS to create a movie-based application. This course offering was notorious for being especially difficult at UC Irvine, where the drop rate is higher than other courses. We worked closely in a fast-paced environment using tools offered by git, such as branches, pull requests, and project management tools. By using feature branching, we were able to avoid many issues that would have arisen from merge conflicts. This application has a mobile version offered to Android users as well.</p>
            <img src={FabflixDemoGif} alt="fabflix demo gif"/>
        </Container>
        <Container title={"Objective"} data-aos="fade-left">
            <p>The objective of this project was to build a fully functional, full-stack application within the time-frame of 11 weeks in a team environment. We were to incorporate concepts within our applications such as sessions, login authentication, database management, REST APIs, and load balancing without the assistance of external libraries to accomplish these tasks. The only library we were allowed to use was a jQuery library to handle auto-complete searches. By creating this application without the help of external libraries, we were able to develop a thorough understanding of how these concepts work. It was rewarding being able to integrate concepts from other classes to accomplish this such as hashmaps and circular arrays.</p>
            <img src={FabflixMobileDemoGif} className={"fabflix-mobile-demo-gif"} alt="fabflix mobile demo gif"/>
        </Container>
        <Container title={"System Architecture"}>
            <p>The user interface of this application was developed using HTML, CSS, and Bootstrap. We handled the logic of the application using Java, JavaScript and jQuery. jQuery was particularly helpful in being able to dynamically update information on the website. The database of the application was managed using MySQL and JDBC. We utilized powerful tools such as stored procedures alongside our database, as well as using prepared statements within our server-side code to prevent SQL injections. Lastly, the application was built and deployed on AWS EC2 instances through using Tomcat, Maven, and Apache. We were able to incorporate load balancing and sticky sessions within EC2 instances.</p>
            <img src={FabflixSystemArchitecture} alt="fabflix system architecture img"/>
        </Container>
        <Container title={"Work Distribution"}>
            <strong>Dennis Chuong</strong>
            <ul>
                <li>CSS Styling</li>
                <li>Login Authentication (including encryption of passwords)</li>
                <li>Login Filtering (users cannot access employee pages)</li>
                <li>Session and Cookie management</li>
                <li>Front-end caching</li>
                <li>reCaptcha</li>
                <li>Prepared Statements</li>
                <li>Stored Procedures</li>
                <li>Full Text Search</li>
                <li>Autocomplete Search (through jQuery Autocomplete Library)</li>
                <li>Creating REST APIs for application</li>
                <li>JSON Object and JSON Array management</li>
                <li>Dashboard for Employees</li>
                <li>Payment Processing</li>
                <li>AWS EC2 Load Balancing</li>
                <li>AWS EC2 Sticky Sessions</li>
            </ul>
            <strong>Michael Lofton</strong>
            <ul>
                <li>Individual Movie Page</li>
                <li>Individual Actor Page</li>
                <li>Browsing</li>
                <li>Sorting</li>
                <li>Pagination</li>
                <li>Multi-field substring search for movies and actors</li>
                <li>Creating REST APIs for application</li>
                <li>JSON Object and JSON Array management</li>
                <li>Prepared Statements</li>
                <li>XML Parsing</li>
                <li>HTTPS for AWS EC2 Instance</li>
                <li>SQL Scripts for Database Backup and Cleanup Automation</li>
                <li>Android Application Logic and Styling</li>
                <li>Narrated Video Demos</li>
                <li>JMeter Log Processing Script</li>
                <li>JMeter Time Measurement Report</li>
                <li>JMeter Generated Logs</li>
            </ul>
        </Container>
        <Container title={"Challenges/Roadblocks"}>
            <p>We ran into many challenges that we had to overcome to be successful within this class. One of the notorious roadblocks that we ran into was not having our data from the database display on the website after a search query was submitted when using an AWS instance. The issue was addressed by modifying the database on AWS to accept our queries as intended.</p>
            <p>We also had to find a way to efficiently clean and restore our database after we added new movie entries for testing purposes. We determined each table that was being affected when we added a new entry, and created sql scripts that would allow us to backup our data and reset any new changes made to the database. This allowed us to test and develop faster.</p>
            <p>Another challenge that we ran into was having both teammates access the AWS EC2 instances, since they were run on one account. After conducting outside research, we found that we were able to share access to these instances through using IAM accounts offered by AWS.</p>
        </Container>
        <Container title={"Future Work"}>
            <p>If we had more time to work on this application, we would spend much more time on styling the application with CSS. It would be a nice addition to be able to add animations to the website and fix the layouts in some other areas. In addition, we would integrate photos of the movies and actors which we could retrieve from IMDB. Lastly, we would have revamped the application through using React.js.</p>
        </Container>
        <Container title={"Conclusion"}>
            <p>If we had more time to work on this application, we would spend much more time on styling the application with CSS. It would be a nice addition to be able to add animations to the website and fix the layouts in some other areas. In addition, we would integrate photos of the movies and actors which we could retrieve from IMDB. Lastly, we would have revamped the application through using React.js.</p>
        </Container>
        <Container title={"Contact Us"}>
            <div className={"container-contact-info-outer"}>
                <div className={"contact-info-box"}>
                    <strong>Dennis Chuong</strong>
                    <ul>
                        <li>dhchuong@uci.edu</li>
                        <li><a href="https://github.com/DennisHC" target="_blank" rel="noreferrer">https://github.com/DennisHC</a></li>
                    </ul>
                </div>
                <div className={"contact-info-box"}>
                    <strong>Michael Lofton</strong>
                    <ul>
                        <li>mlofton@uci.edu</li>
                        <li><a href="https://github.com/michaellofton" target="_blank" rel="noreferrer">https://github.com/michaellofton</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
};