import { Icon } from 'antd';
import *as React from 'react';

const MenuItems = () => {
    return (
        <div className='menu-items'>
            <ul>
                <li className='active-menu'><Icon type="dashboard" />Main</li>
                <li><Icon type="file-protect" />Projects</li>
                <li><Icon type="user" />Users</li>
            </ul>
        </div>
    );
}

export default MenuItems;
