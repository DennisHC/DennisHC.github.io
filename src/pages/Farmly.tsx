// Styling
import '../styles/global.scss';
import '../styles/farmly.scss';

// Components
import { ProjectDetailPageTitle } from '../components/ProjectDetailPageTitle/ProjectDetailPageTitle.tsx';
import { Container } from '../components/Container/Container.tsx';
import { BackButton } from '../components/BackButton/BackButton.tsx';
import { WorkDistribution } from '../components/WorkDistribution/WorkDistribution.tsx';

// GIFs
import FarmlyGif1 from '../assets/gif/farmly_demo_p1.gif';
import FarmlyGif2 from '../assets/gif/farmly_demo_p2.gif';
import FarmlyGifLogIn from '../assets/gif/farmly_log_in.gif';
import FarmlyGifLogOut from '../assets/gif/farmly_log_out.gif';
import FarmlyGifCheckout from '../assets/gif/farmly_checkout.gif';

// IMGs
import FarmlySystemArchitecture from '../assets/img/farmly_system_architecture.png';


export const Farmly = () => {
    return <div>
        <BackButton/>
        <ProjectDetailPageTitle title={"UCI Senior Capstone Project – Farmly"} />
        <Container title={"Introduction"}>
            <p>Farmly is a web and mobile based application developed by Adrian Chu, Dennis Chuong, Jingtong Gao, and Lily He. It was constructed over two quarters through our Senior Capstone project offered through the University of California, Irvine. The purpose is to create a dedicated application for small farmers to sell their produce to consumers, where a dedicated application does not currently exist. Farmly was one of the three projects in the Computer Science course offering that was invited to present at the annual UCI ICS Showcase.</p>
            <div className={"container-demo"}>
                <img className={"farmly-gif"} src={FarmlyGif1} alt="Farmly Demo Gif 1"/>
                <img className={"farmly-gif"} src={FarmlyGif2} alt="Farmly Demo Gif 2"/>
            </div>
        </Container>
        <Container title={"Objective"}>
            <p>The objective for the project was to be able to create both a web and mobile based application to connect farmers and their customers within the span of 21 weeks (or two quarters). The aim was to be able to create a minimum viable product (MVP) before the end of our capstone.</p>
        <div className={"container-demo"}>
                <img className={"farmly-gif"} src={FarmlyGifLogIn} alt="Farmly Login Gif"/>
                <img className={"farmly-gif"} src={FarmlyGifLogOut} alt="Farmly Logout Gif"/>
                <img className={"farmly-gif"} src={FarmlyGifCheckout} alt="Farmly Checkout Gif"/>
            </div>
        </Container>
        <Container title={"System Architecture"}>
            <p>The application was developed using a variety of languages and technologies. The frameworks we used to develop this application include Angular and Ionic. These frameworks were paired alongside HTML5 for the layout, SASS for the styling, and Typescript for the logic of our application. In addition, we utilized Firestore for our storage consisting of a NoSQL database, which taught us how to work with databases that deviated from the traditional relational database structure. We also used Firebase for our login authentication and cloud storage. The microservices through GCP such as Cloud Functions, Pub/Sub, and Cloud Scheduler were helpful in creating the analytics for our application and creating thumbnails for our images on Firebase. To create the Android version of our application, we had to use Android Studio and Capacitor to accomplish this. Lastly, we used Stripe’s API to handle our payment processing.</p>
            <img src={FarmlySystemArchitecture} alt="Farmly System Architecture Diagram"/>
        </Container>
        <Container title={"Work Distribution"}>
            <WorkDistribution 
                name="Dennis Chuong"
                tasks={["Consumer Profile User Interface",
                    "Create Listing Page",
                    "Analytics via GCP Microservices",
                    "Firestore Indexes for Cart (Collection Groups)",
                    "Currency Regex",
                    "Login Page User Interface"
                ]}   
            />
            <WorkDistribution 
                name="Adrian Chu"
                tasks={["Media Upload Backend Service",
                    "User Authentication Backend Service",
                    "Home Page Frontend",
                    "Navigation Bar"
                ]}
            />
            <WorkDistribution 
                name="Jingtong Gao"
                tasks={["Consumer Profile Backend Service",
                    "Cart Page",
                    "Checkout Page",
                    "Stripe Integration",
                    "Search Indexing"
                ]}
            />
            <WorkDistribution 
                name="Lily He"
                tasks={["General Frontend Assistance",
                    "Organization Profile",
                    "Listing Component"
                ]}
            />
       
        </Container>
        <Container title={"Challenges/Roadblocks"}>
            <p>One of the main challenges that we have faced during the Spring quarter was that the group members’ schedules conflicted. This meant that we could not meet Monday through Friday for our daily stand-up meeting, as we had done in the first quarter. Instead, we had to meet on only Monday, Wednesday, and Friday. To address this issue, we planned for longer meetings and more closer communication with the project sponsor through messaging services. Team members also scheduled individual appointments with our project sponsor as needed.</p>
            <p>Our conflicting schedules also made it difficult for us to schedule time to work together as a group and to schedule when to have our final presentation. Often, we found that only any 3 of 4 members could make these meetings. In most cases, we settled with working with a fraction of our group. In cases where the meeting was important, some members had to make sacrifices in their schedule to attend the meeting.</p>
            <p>Another challenge that we faced was with combining our work together. Instead of initially being able to work individually where we were familiar with our own code, we had to connect our code to call other team members’ source code. To overcome this, we began to have peer programming sessions and worked more closely together.</p>
            <p>We ran into some technical challenges as well, such as running into outdated libraries when using Android Studio. To circumvent this issue, we found alternative solutions to get to the same destination we were working towards.</p>
        </Container>
        <Container title={"Future Work"}>
            <p>UI/UX Design: While the application is intuitive to us as the designers, it may not necessarily be intuitive to the intended users. We plan on getting input from a professional UI/UX designer to improve the application’s interfaces.</p>
            <p>User testing: We plan on having actual farmers test the system. We might perform task analysis or contextual inquiry, among other things; we can learn more about the farmers’ goals with our system and see if there are any burdensome steps that our system forces the farmers to perform.</p>
        </Container>
        <Container title={"Conclusion"}>
            <p>Through working together with our project sponsor, we were able to learn a lot from this experience while completing our minimum viable product. One of the most notable things that we learned was working together with very few merge conflicts as a result of setting up our Git branches as feature branches. This really helped us have a firm grasp in working in a team environment with Git. We also learned how to work with the cloud, frameworks, languages, and other technologies we wouldn’t have been able to learn otherwise. As a result of the hard work and dedication to this project, we were invited to present at the annual UCI ICS showcase where only three teams from the capstone project were nominated to present.</p>
        </Container>
        <Container title={"Contact Us"}>
            <div className={"container-contact-info-outer"}>
                <div className={"container-contact-info"}>
                    <div className={"contact-info-box"}>
                        <strong>Adrian Chu</strong>
                        <ul>
                            <li>aochu@uci.edu</li>
                            <li>https://github.com/Okuribi</li>
                        </ul>
                    </div>
                    <div className={"contact-info-box"}>
                        <strong>Dennis Chuong</strong>
                        <ul>
                            <li>dhchuong@uci.edu</li>
                            <li>https://github.com/DennisHC</li>
                        </ul>
                    </div>
                </div>

                <div className={"container-contact-info"}>
                    <div className={"contact-info-box"}>
                        <strong>Jingtong Gao</strong>
                        <ul>
                            <li>jingtong@uci.edu</li>
                            <li>https://github.com/nico-gao</li>
                        </ul>
                    </div>
                    <div className={"contact-info-box"}>
                        <strong>Lily He</strong>
                        <ul>
                            <li>lmhe@uci.edu</li>
                            <li>https://github.com/he-lily</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </div>;
}