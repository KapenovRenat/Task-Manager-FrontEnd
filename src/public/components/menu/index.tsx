import * as React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import MenuItems from '../../../public/components/menu/components/menu-items';
import MenuHeader from '../../../public/components/menu/components/menu-header';
import { IUser } from '../../../public/Interfaces/user/user';

interface IMenu {
    user: IUser;
}

const Menu = ({user}: IMenu) => {
    return (
        <div className='menu'>
            <MenuHeader user={user}/>
            <MenuItems />
        </div>
    );
}

export default connect(
    (state: any) => ({
        user: state.user,
    }),
    (dispatch: any) => ({})
)(Menu);
