import { navigate, Router } from '@reach/router';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import MainPage from '../../../pages/main';
import Menu from '../../../public/components/menu';
import { isAuthorizated } from '../../../public/services/authorization';
import { itemsFetchDataUser } from '../../../store/actions/user';
import BigLoader from '../../../public/components/loader';

interface IMain {
    path: string;
    getUser: () => void;
    isLoading: boolean;
}

const MainComponent = ({path, getUser, isLoading}: IMain) => {

    useEffect(()=> {
        getUser();
        if (!isAuthorizated()){
            navigate('/signIn');
        }
    }, []);

    if (isLoading) {
        return (
            <div className='container'>
                <BigLoader />
            </div>
        )
    } else {
        return (
            <div className='container'>
                <Menu />
                <div className="container-content">
                    <Router>
                        <MainPage path='/'/>
                    </Router>
                </div>
            </div>
        );
    }


};

export default connect(
    (state: any) => ({
        hasError: state.userHasErrored,
        isLoading: state.userIsLoading
    }),
    (dispatch: any) => ({
        getUser: () => dispatch(itemsFetchDataUser()),
    })
)(MainComponent);
