import 'react-dom';
import './Container.scss';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';

export const Container = (props, children) => {
    return <div className="container-detail-page">
        <SectionTitle title={ props.title }/>
        { props.children }
    </div>
};