import { Link } from '@reach/router';
import { Alert, Button, Icon } from 'antd';
import { useState } from 'react';
import * as React from 'react';
import { signUp } from '../../../public/services/authorization';
import { validator } from '../../../public/services/validation/custom-validation';
import { useUserData } from '../../../public/custom-hooks/custom-hook-form';
import { IUser } from '../../../public/Interfaces/user/user';

const RegistrationPage = ({path}: any) => {
    let [user, bind] = useUserData();
    let [errors, setErrors] = useState<string[]>([]);
    let [success, setSuccess] = useState<string>('');
    let [loading, setloading] = useState<boolean>(false);

    const submit = async (e: any) => {
        e.preventDefault();
        setErrors(validator(user));
        if (!errors.length){
            if ((user as IUser).hash !== (user as IUser).hashConfirm){
                setErrors([...errors, 'Passwords do not match']);
            } else {
                setloading(true);
                try {
                    const res = await signUp((user as IUser));
                    setSuccess(res.data.res);
                    setloading(false);
                } catch (e) {
                    setErrors([e.response.data.res]);
                    setloading(false);
                }
            }
        }
    };

    return (
        <div className='authorization'>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <Icon className='form-icon' type="mail" style={{ color: 'rgba(0,0,0,.8)' }} />
                    <input
                        placeholder='Email'
                        name='email'
                        {...bind}
                    />
                </div>
                <div className='form-group'>
                    <Icon className='form-icon' type='user' style={{ color: 'rgba(0,0,0,.8)' }} />
                    <input
                        placeholder='Name'
                        name='name'
                        {...bind}
                    />
                </div>
                <div className='form-group'>
                    <Icon className='form-icon' type='lock' style={{ color: 'rgba(0,0,0,.8)' }} />
                    <input
                        placeholder='Password'
                        name='hash'
                        type='password'
                        {...bind}
                    />
                </div>
                <div className='form-group'>
                    <Icon className='form-icon' type='lock' style={{ color: 'rgba(0,0,0,.8)' }} />
                    <input
                        placeholder='Password Confirm'
                        name='hashConfirm'
                        type='password'
                        {...bind}
                    />
                </div>
                {success !== '' && <Alert message={success} type="success" showIcon style={{marginBottom: '20px'}}/>}
                {
                    errors.map((item: string, index: number) =>  <Alert message={item} key={index} style={{marginBottom: '20px'}} type="error" showIcon />)
                }
                <div className='form-buttons'>
                    <Button type='primary' htmlType='submit' loading={loading}>
                        Sign Up
                    </Button>
                    <Link to='/signIn'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;
