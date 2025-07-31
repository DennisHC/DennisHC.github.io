import './ProjectDetailPageTitle.scss';

export const ProjectDetailPageTitle = (props) => {
    return <h1 className={"project-detail-page-title"}>
        { props.title }
    </h1>;
}