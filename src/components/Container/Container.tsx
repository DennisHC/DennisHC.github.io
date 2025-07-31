import './Container.scss';

import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';

export const Container = (props) => {
    return <div className="container-detail-page">
        <SectionTitle title={ props.title }/>
        { props.children }
    </div>
};