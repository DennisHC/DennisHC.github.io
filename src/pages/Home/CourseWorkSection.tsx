import 'react-dom';

import UciImg from '../../assets/img/uci.jpg';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const CourseWorkSection = (props) => {
    return <>
    <SectionTitle title={"Relevant Coursework"}/>
     <div className="container-course-work">
        <img src={UciImg} alt="UCI img" className="course-work-half img-uci"></img>
        <div className="course-work-half">
            <div className="course-work-item">
                <strong className="course-work-item-title">University of California Irvine, Irvine, CA</strong>
                <ul>
                    <li>Boolean Algebra</li>
                    <li>Software Engineering</li>
                    <li>Databases</li>
                    <li>Probability and Statistics</li>
                    <li>Computer Architecture and Assembly</li>
                    <li>Discrete Math</li>
                    <li>Computational Linear Algebra</li>
                    <li>System Design</li>
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Project in IoT</li>
                    <li>Information Retrieval (Search Engines)</li>
                    <li>Software Testing, Analysis, and Quality Assurance</li>
                    <li>Design and Analysis of Algorithms</li>
                    <li>Senior Capstone Project: Farmly</li>
                    <li>Project in Databases and Web Applications</li>
                    <li>Computer Networks</li>
                </ul>
            </div>
            <div className="course-work-item">
                <strong className="course-work-item-title">Orange Coast College, Costa Mesa, CA</strong>
                <ul>
                    <li>Java Programming 1</li>
                    <li>C++ Programming 1</li>
                    <li>C++ Programming 2</li>
                    <li>Data Structures</li>
                    <li>Calculus 1</li>
                    <li>Calculus 2</li>
                </ul>
            </div>
            <div className="course-work-item">
                <strong className="course-work-item-title">CodePath</strong>
                <ul>
                    <li>
                        <a href="https://drive.google.com/file/d/1QyiaOv30ULEe0ZRjImm8BQUc9a4glYDT/view">
                            Android Mobile Development
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1nwK68OmfnSc_PETGJ4mmdFzR3JE25zN_/view">
                            Cybersecurity
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
}