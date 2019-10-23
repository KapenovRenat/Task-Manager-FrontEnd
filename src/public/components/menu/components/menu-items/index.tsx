import { navigate } from '@reach/router';
import { Icon } from 'antd';
import { useState } from 'react';
import *as React from 'react';

const MenuItems = () => {
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
                <li className={activePage(1)} onClick={()=>changePage(1, '/')}><Icon type="dashboard" />Main</li>
                <li className={activePage(2)} onClick={()=>changePage(2, '/projects')}><Icon type="file-protect" />Projects</li>
                <li className={activePage(3)} onClick={()=>changePage(3, '/users')}><Icon type="user" />Users</li>
            </ul>
        </div>
    );
}

export default MenuItems;
