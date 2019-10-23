import { Button } from 'antd';
import * as React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { IUser } from '../../../public/Interfaces/user/user';

interface IMenu {
    user: IUser;
}

const Menu = ({user}: IMenu) => {
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
