import { navigate } from '@reach/router';
import { Button } from 'antd';
import * as React from 'react';
import { IUser } from '../../../../../public/Interfaces/user/user';
import { isLogout } from '../../../../../public/services/authorization';

interface IMenuHeader {
    user: IUser;
}

const MenuHeader = ({user}: IMenuHeader) => {

    const logout = () => {
        isLogout();
        navigate('/signIn');
    };

    return (
        <div className="menu-header">
            <h2>{user.email}</h2>
            <div className="menu-header-actions">
                <Button
                    type="primary"
                    icon="setting"
                >Settings</Button>
                <Button
                    type="primary"
                    icon="poweroff"
                    onClick={logout}
                >LogOut</Button>
            </div>
        </div>
    );
}

export default MenuHeader;
