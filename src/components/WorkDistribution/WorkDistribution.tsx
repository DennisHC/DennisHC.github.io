import './WorkDistribution.scss';

export const WorkDistribution = (props) => {
    return <div className="container-work-distribution">
        <strong className="work-distribution-name">{ props.name }</strong>
        <ul>
            { 
                props.tasks ? 
                    props.tasks.map((task) => (
                    <li>{ task }</li>))
                : 
                ""
            }
        </ul>
    </div>
};