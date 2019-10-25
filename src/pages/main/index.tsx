import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { mainFecthData } from '../../store/actions/main';
import CharComponent from '../../pages/main/components/chart';
import MainHeader from '../../public/components/page-header';

const MainPage = ({path, getData}: any) => {

    useEffect(() => {
        getData();
    });

    return (
        <div className='page'>
            <MainHeader title={'Main'}/>
            <CharComponent />
        </div>
    );
}

export default connect(
    (state: any) => ({}),
    dispatch => ({
        getData: () => dispatch(mainFecthData())
    })
)(MainPage);
