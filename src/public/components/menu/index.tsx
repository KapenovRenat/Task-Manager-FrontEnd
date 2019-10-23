import { navigate } from '@reach/router';
import { Button } from 'antd';
import * as React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { isLogout } from '../../../public/services/authorization';
import { IUser } from '../../../public/Interfaces/user/user';

interface IMenu {
    user: IUser;
}

const Menu = ({user}: IMenu) => {

    const logout = () => {
        isLogout();
        navigate('/signIn');
    };

    return (
        <div className='menu'>
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
        </div>
    );
}

export default connect(
    (state: any) => ({
        user: state.user,
    }),
    (dispatch: any) => ({})
)(Menu);
