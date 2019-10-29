import { navigate } from '@reach/router';
import { Icon } from 'antd';
import { useState } from 'react';
import *as React from 'react';
import { connect } from 'react-redux';

const MenuItems = ({user}: any) => {
    const [page, setPage] = useState<number>(1);

    const activePage = (pageSet: number) => {
        return pageSet === page ? 'active-menu' : ''
    };

    const changePage = (pageSet: number, url: string) => {
        setPage(pageSet);
        navigate(url);
    };

    return (
        <div className='menu-items'>
            <ul>
                <li className={activePage(1)} onClick={()=>changePage(1, '/')}><Icon type='dashboard' />Main</li>
                {user.isActivate && <li className={activePage(2)} onClick={()=>changePage(2, '/projects')}><Icon type='file-protect' />Projects</li>}
                {user.isActivate &&<li className={activePage(3)} onClick={()=>changePage(3, '/users')}><Icon type='user' />Users</li>}
                {!user.isActivate &&<li>Activate your account!</li>}
            </ul>
        </div>
    );
}

export default connect(
    (state: any) => ({
        user: state.user
    }),
    dispatch => ({})
)(MenuItems);
