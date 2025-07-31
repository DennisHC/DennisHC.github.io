// Components
import { Project } from '../../components/Project/Project.tsx';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

// Assets
import fabflixDemo from '../../assets/gif/fabflix_basic_demo.gif';
import stockpotDemo from '../../assets/gif/stockpot_walkthrough.gif';
import farmlyDemo from '../../assets/gif/farmly_demo.gif';
import flixsterDemo from '../../assets/gif/flixster_demo_part_2.gif';
import bappleDemo from '../../assets/gif/bapple_demo.gif';
import zotcalzDemo from '../../assets/gif/zotcalz_demo.gif';
import rccGsheetsParserDemo from '../../assets/gif/rcc_sheets.gif';
import rccDiscordBotDemo from '../../assets/gif/discord_bot.gif';

export const ProjectSection = (props) => {
    return <div className="container-project-section">
        <SectionTitle title={"Projects"}></SectionTitle>
        <Project
            srcUrl={fabflixDemo}
            imgAltText={"Fabflix Demo GIF"}
            title={"Fabflix"}
            titleRedirectUrl={"fabflix"}
            description={"Constructed a movie-focused web application that displays relevant information on movies and stars of movies. Developed the front-end using HTML and CSS. Handled the logic of the back-end using JavaScript and jQuery. Interacted with the movies database using JDBC and MySQL, while utilizing stored procedures. Hosted the website on AWS while using principles such as connection pooling and load balancing. Implemented an autocomplete search feature when searching for movies. Incorporated usage of session data and cookies."}/>
        <Project
            srcUrl={stockpotDemo}
            imgAltText={"Stockpot Demo GIF"}
            title={"Stockpot"}
            titleRedirectUrl={"https://github.com/Codepath-Group-5/Stockpot"}
            description={"Constructed a movie-focused web application that displays relevant information on movies and stars of movies. Developed the front-end using HTML and CSS. Handled the logic of the back-end using JavaScript and jQuery. Interacted with the movies database using JDBC and MySQL, while utilizing stored procedures. Hosted the website on AWS while using principles such as connection pooling and load balancing. Implemented an autocomplete search feature when searching for movies. Incorporated usage of session data and cookies.Launched an educational stock trading Android application that gives in-depth analysis of stocks and allows users to interact with the platform by creating posts of predictions and analysis. Collaborated within a 3-person team environment using the Agile Framework, Scrum to quickly deliver a minimum viable product (MVP) utilizing Sprints and GitHub's project management board. Developed the application implementing features such as an indeterminate progress bar when loading data from an external REST API, utilizing Recycler Views and List Views to display data, interaction with the Parse database, and a feature to pull down to request new posts."}/>
        <Project
            srcUrl={farmlyDemo}
            imgAltText={"Farmly Demo GIF"}
            title={"Farmly"}
            titleRedirectUrl={"farmly"}
            description={"Facilitated senior capstone project consisting of a 4-person team using Scrum (Agile Framework). Organized daily weekday meetings with project sponsors and operated as a liaison. Implemented front-end using the Ionic framework, incorporating elements from HTML, CSS, TypeScript, and SASS. Assembled the back-end logic using Angular using concepts such as components, pages, and routing. Developed a system for analytics through Google Cloud Platform microservices such as Google Cloud Functions, Google Cloud Scheduler, and Google Cloud Pub/Sub. Integrated Firestore/Firebase functionality within the application. Farmly was one of three projects invited to panel at the annual UCI ICS Showcase."}/>
        <Project
            srcUrl={flixsterDemo}
            imgAltText={"CodePath Android Projects Demo GIF"}
            title={"CodePath: Android Projects"}
            titleRedirectUrl={"https://github.com/DennisHC/Flixster"}
            description={"Participated in off-campus 10-week CodePath course to learn Android development. Incorporated fundamental concepts such as implementing RecyclerViews, layouts through XML files, inflating views and binding data respectively, and etc. Projects in-progress or to be completed include Flixster, SimpleTweet, and SimpleInstagram. The project currently presented is Flixster, an application used to display the top current movies with detailed Information including ratings, movie descriptions, and movie trailers. APIs utilized included Movie DB API and YouTube API."}/>
        <Project
            srcUrl={bappleDemo}
            imgAltText={"Bapple Demo Gif"}
            title={"Bapple"}
            titleRedirectUrl={"bapple"}
            description={"Collaborated in a 4-person team to create a web-based search engine from the ground up that is capable of handling tens of thousands of documents or Web pages, under harsh operational constraints and having a query response time under 300ms. Constructed front-end of web-based search engine using HTML, CSS, and JavaScript. Utilized Flask to handle back-end logic such as passing relevant information based on the user query. Implemented core search engine fundamentals such as tokenizing, stopping, and relevance score."}/>
         <Project
            srcUrl={zotcalzDemo}
            imgAltText={"ZotCalZ Demo Gif"}
            title={"ZotCalZ"}
            titleRedirectUrl={"https://github.com/DennisHC/ZotCalZ"}
            description={"Developed a health and wellness program which logs the users caloric and macronutrient consumption for the current day using an Arduino and a corresponding HX711 load cell, which outputs remaining caloric and macronutrient goals for the day. This project utilizes Flask, HTML, CSS, JavaScript, MySQL, AWS EC2, AWS RDS, and Chart.js to accomplish this task."}/>
        <Project
            srcUrl={rccGsheetsParserDemo}
            imgAltText={"American Red Cross Club General Member Google Sheets Parser Gif"}
            title={"American Red Cross Club: General Member Google Sheets Parser"}
            titleRedirectUrl={"https://github.com/DennisHC/RCC_GoogleSheetsParser"}
            description={"Constructed a desktop application that automates a time-consuming task. This program reduces the amount of time of inputting general member points from 30-40 minutes to 1-4 minutes per use. This project was created using Python, gspread API, and Tkinter GUI. The code is expected to be refactored and the GUI to be recreated in PyQt in a future iteration."}/>
        <Project
            srcUrl={rccDiscordBotDemo}
            imgAltText={"American Red Cross Club Discord Bot Demo Gif"}
            title={"American Red Cross Club: Discord Bot"}
            titleRedirectUrl={""}
            description={"Developed a Discord Bot for the American Red Cross Club at UCI. The Discord Bot provides quick access to links of interest and provides helpful information for members of the UCI community to get connected with the club. This program was implemented using Discord.py and deployed via Heroku."}/>
    </div>
}