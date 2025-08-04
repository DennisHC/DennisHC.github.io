// Components
import { ProjectDetailPageTitle } from '../components/ProjectDetailPageTitle/ProjectDetailPageTitle.tsx';
import { Container } from '../components/Container/Container.tsx';
import { BackButton } from '../components/BackButton/BackButton.tsx';

// GIFs and IMGs
import BappleDemo from '../assets/gif/bapple_demo.gif';
import BappleSystemArchitecture from '../assets/img/bapple_system_architecture.png';
import { WorkDistribution } from '../components/WorkDistribution/WorkDistribution.tsx';

export const Bapple = () => {
    return <div>
        <BackButton/>
        <ProjectDetailPageTitle title={"CS 121 — Bapple"}/>
        <Container title={"Introduction"}>
            <p>Bapple is a search engine created by Dennis Chuong, Dennis Hernandez, John Cuviello, and Melinda Li for COMPSCI 121: Information Retrieval, an upper division class offered at UC Irvine. Over the course of four weeks, we developed a search engine from scratch using Python and a clean user interface with HTML, CSS, Bootstrap, and JavaScript. Our group was recognized for having the best user interface this quarter. Given a set of JSON files containing a website’s HTML, Bapple is able to store and index the terms locally to be used during the querying process. Once a user submits a query, Bapple can quickly provide an ordered list of relevant websites, usually in under 300 milliseconds.</p>
            <img src={BappleDemo} alt="Bapple Demo Gif" />
        </Container>
        <Container title={"Objective"}>
            <p>The objective for the project was to create a robust search engine, consisting of both an indexer and search component, for webpages under the uci.edu domain. The primary goal for our search engine was to retrieve documents both effectively and efficiently, by providing the most relevant documents and retrieving the respective documents in 300 milliseconds or less. We planned to achieve this by creating an inverted index for the terms in our corpus while utilizing a tokenizer, token stemming, and weighting of important text. We also planned to implement query processing at retrieval time which included ranking based on tf-idf score along with term weight based on html tags. Additional features we had initially planned to implement included an aesthetic web interface, similar/duplicate page detection, and bigram indexing.</p>
        </Container>
        <Container title={"System Architecture"}>
            <p>The user interface of Bapple was implemented in HTML, CSS, Bootstrap, and JavaScript. The back-end of the project was constructed in Flask. We imported the logic for our search engine through our app.py (Flask) file before passing the information to the front-end application. The user search queries are retrieved from the search bar asynchronously and are appended to the URL in order for it to be used again on the results page, where we displayed the relevant results of the search query. The user search query is processed through our Python functions we had coded using principles such as stemming words and ranking words based on tf-idf score. Our search engine would return a fixed number of top results relevant to the search query, in which we would pass as context objects to the front-end to manipulate with HTML, CSS, and JavaScript. The titles and URLs of the webpages are displayed functionally on the results page, in which the user can click on the hyperlinks to directly access the page.</p>
            <img src={BappleSystemArchitecture} alt="Bapple System Architecture Graphic" />
        </Container>
        <Container title="Work Distribution">
            <WorkDistribution 
                name="Dennis Chuong"
                tasks={[
                    "Implemented an interactive, web-based user interface using HTML, CSS, Bootstrap, and JavaScript",
                    "Utilized Flask to handle search engine logic and pass top-ranking search queries to the front-end by context objects",
                    "Designed algorithm to merge partial indexes that resulted from the inverted index being separated into three separate documents"
                ]}
            />

            <WorkDistribution 
                name="Dennis Hernandez"
                tasks={[
                    "Traversed folder/files to gather the webpage files for later opening and processing",
                    "Computed tf-idf scores for each term in the corpus to use in the ranking implementation",
                    "Implemented simhash for similarity and duplicate checking of web pages",
                    "Store number of times a certain term appears in important tags to weigh the website in the ranking algorithm"
                ]}
            />

            <WorkDistribution 
                name="John Cuviello"
                tasks={[
                    "Implemented conjunctive processing for query terms, with rankings based on tf-idf score and weight of important html tags",
                    "Created intersection algorithm for document ids to find overlapping documents for a given token"
                ]}
            />

            <WorkDistribution 
                name="Melinda Li"
                tasks={[
                    "Stored inverted index into three separate documents to preserve local memory space",
                    "Created a dictionary to track the byte location of each term in the inverted index file",
                    "Implemented bigram storage and usage to quickly retrieve results for two word queries"
                ]}
            />
        </Container>
        <Container title={"Challenges and Roadblocks"}>
            <p>A major challenge in this project was figuring out what specifically to code, since the requirements were designed to be vague and up for interpretation in this course. We knew the general idea behind the project, but when getting into the details, we were not too sure about how to modularize or split up the functionality. Interfacing with code was dependent on how it ended up being implemented. Since we didn’t know how things would be implemented in the beginning, we were stuck at times waiting for other parts to be finished.</p>
            <p>Another issue we ran into was persisting the index data for efficient use. We originally persisted the data using Python pickling, but this presented difficulties when trying to read off the file at query time. The pickled data was dependent on knowing the custom class definitions and wasn’t able to utilize file seek. We resolved this issue by storing the index as text in json format. This text was easier to read and parse back into a Python dictionary. Even though this data was able to be read back into a Python dictionary, we ran into memory problems. This brings us to our next issue.</p>
            <p>Reading only the data we need at a time into memory. To be able to find this data quickly, we built an index of the index. This secondary index provided the file positions necessary to find the correct terms and their Postings List quickly.</p>
        </Container>
        <Container title={"Future Work"}>
            <p>If we had more time, we would add cosine similarity to improve the ranking of relevant documents. We were also planning on implementing a champions list of documents, which would help ensure only the highest ranked documents would be retrieved, letting us skip over less relevant ones. We would also order the posting objects in the inverted index by TF-IDF and HTML tags to save time from ranking them during query time. To further improve the ranking of relevant documents, we would implement the use of word positions to ensure that phrases in the query closely match queries in relevant documents.</p>
        </Container>
        <Container title={"Conclusion"}>
            <p>Through this course, we learned how to apply fundamental information retrieval concepts to build a search engine efficient in regards to both space and time, while strengthening our abilities working in a team environment. By completing all of the required features early on, we were able to focus on more interesting and challenging concepts to add to the search engine that were optional features. This included creating a graphical user interface, handling bigrams, and detecting duplicate and similar pages. After implementing all of our optional features, we were able to retrieve the most relevant documents for a given query in under 300 milliseconds. The results from the queries were proven to have high precision and recall. Additionally, we were recognized as having constructed the best user interface in the course this quarter and we received a score of 60/55 on the assignment.</p>
        </Container>
        <Container title={"Contact Us"}>
            <div className={"container-contact-info-outer"}>
                <div className={"container-contact-info"}>
                    <div className={"contact-info-box"}>
                        <strong>Dennis Chuong</strong>
                        <ul>
                            <li>dhchuong@uci.edu</li>
                            <li>https://github.com/DennisHC</li>
                        </ul>
                    </div>
                    <div className={"contact-info-box"}>
                        <strong>Dennis Hernandez</strong>
                        <ul>
                            <li>dennisfh@uci.edu</li>
                            <li>https://github.com/instealer</li>
                        </ul>
                    </div>
                </div>

                <div className={"container-contact-info"}>
                    <div className={"contact-info-box"}>
                        <strong>John Cuviello</strong>
                        <ul>
                            <li>jcuviell@uci.edu</li>
                            <li>https://github.com/NotJohnCuviello</li>
                        </ul>
                    </div>
                    <div className={"contact-info-box"}>
                        <strong>Melinda Li</strong>
                        <ul>
                            <li>melindll@uci.edu</li>
                            <li>https://github.com/melindali255</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </div>;
}