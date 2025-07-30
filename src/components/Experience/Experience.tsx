import 'react-dom';
import './Experience.scss';

export const Experience = (props) => {
    return <div className="container-experience">
        <div className="flex-item">
            <img src={ props.srcUrl } alt={ props.imgAltText } className="img-experience flex-item"></img>
        </div>

        <div className="flex-item">
            <h3 className="experience-title">
                <a href={ props.titleRedirectUrl } target="_blank" rel="noopener noreferrer">
                    { props.title }
                </a>
            </h3>
            <h3 className="experience-job-title">
                { props.jobTitle }
            </h3>
            <h6 className="experience-years-worked-title">
                { props.yearsWorked }
            </h6>
            <p className="experience-description">
                { props.description }
            </p>
        </div>
    </div>
};

export default Experience;