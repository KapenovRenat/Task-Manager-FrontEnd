import { Select } from 'antd';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { IUser } from '../../../public/Interfaces/user/user';
import { getUsers } from '../../../public/services/users';

const UserCustomSelect = ({select}: any) => {
    const { Option } = Select;
    const [message, setMessage] = useState<string>('');
    const [items, setItems] = useState<IUser[]>();

    useEffect(() => {
        setMessage('');
        getUsers()
            .then(res => {
                setItems(res.data.res)
            })
            .catch(e => setMessage('Sorry, try again'));
    }, []);

    const handleChange = (value: any) => {
        select(value);
    };

    return (
        <React.Fragment>
            {message
                ?
                <p>{message}</p>
                :
                <Select defaultValue='pls select!' style={{ width: '100%' }} onChange={handleChange}>
                    {   items &&
                            items.map((item: IUser, index: number) =>
                                <Option value={item.email} key={index}>{item.email}</Option>
                            )
                    }
                </Select>
            }
        </React.Fragment>
    );
};

export default UserCustomSelect;
