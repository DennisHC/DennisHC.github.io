import './SkillTag.scss';

export const SkillTag = (props) => {
    return <div className="container-skill-tag">
        <p className="text-skill-name">{ props.skillName }</p>
    </div>
}