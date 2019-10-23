import * as React from 'react';
import CharComponent from '../../pages/main/components/chart';
import MainHeader from '../../public/components/page-header';

const MainPage = ({path}: any) => {
    return (
        <div className='page'>
            <MainHeader title={'Main'}/>
            <CharComponent />
        </div>
    );
}

export default MainPage;
