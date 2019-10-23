import * as React from 'react';
import './styles.scss';

interface IMainHeader {
    title: string;
}

const MainHeader = ({title}:IMainHeader) => {
    return (
        <div className='main-header'>
            <p>{title}</p>
        </div>
    );
}

export default MainHeader;
