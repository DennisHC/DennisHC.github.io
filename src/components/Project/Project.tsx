import 'react-dom';
import './Project.scss';

import { SmartLink } from '../SmartLink/SmartLink.tsx';
import { SkillTag } from '../SkillTag/SkillTag.tsx';

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

            <h4 className="title-technologies-used">Technologies Used</h4>
            { props.skillNames ? 
                props.skillNames.map((name) => (
                    <SkillTag skillName={name}></SkillTag>
                )) :
                null
            }

            <h4 className="title-project-description">Description</h4>
            <p className="project-description">
                { props.description }
            </p>
        </div>
    </div>
};

export default Project;