import 'react-dom';
import './Project.scss';
import SmartLink from '../SmartLink/SmartLink.tsx';

export const Project = (props) => { 
    return <div className="container margin-between-sections">
        <div className="flex-item" data-aos="fade-right">
            <img src={ props.srcUrl } alt={ props.imgAltText } className="img-project"></img>
        </div>
        <div className="flex-item" data-aos="fade-left">
            <h3 className="project-title">
                <SmartLink to={props.titleRedirectUrl} className="link-no-style">
                    { props.title }
                </SmartLink>
            </h3>
            <h6 className="project-years-title">
                { props.years }
            </h6>
            <p className="project-description">
                { props.description }
            </p>
        </div>
    </div>
};

export default Project;