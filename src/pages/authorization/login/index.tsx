import { Link } from '@reach/router';
import { Alert, Button, Icon } from 'antd';
import { useState } from 'react';
import * as React from 'react';
import { saveTokenToLocalStorage, signIn } from '../../../public/services/authorization';
import { validator } from '../../../public/services/validation/custom-validation';
import { useUserData } from '../../../public/custom-hooks/custom-hook-form';
import { IUser } from '../../../public/Interfaces/user/user';

const initialSignIn = {
    email: '',
    hash: '',
};

const LoginPage = ({path}: any) => {
    let [user, bind] = useUserData(initialSignIn);
    let [errors, setErrors] = useState<string[]>([]);
    let [loading, setLoading] = useState<boolean>(false);

    const submit = async (e: any) => {
        e.preventDefault();
        setErrors(validator(user));
        if (!validator(user).length){
            setLoading(true);
            try {
                const res = await signIn((user as IUser));
                await saveTokenToLocalStorage(res.data.suc_token);
                setLoading(false);
            } catch (e) {
                setErrors([e.response.data.res]);
                setLoading(false);
            }
        }
    };

    return (
        <div className='authorization'>
            <form onSubmit={submit}>
                <h2 className="form-title">Sign In</h2>
                <div className='form-group'>
                    <Icon className='form-icon' type="mail" style={{ color: 'rgba(0,0,0,.8)' }} />
                    <input
                        placeholder='Email'
                        name='email'
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
                {
                    errors.map((item: string, index: number) =>  <Alert message={item} key={index} style={{marginBottom: '20px'}} type="error" showIcon />)
                }
                <div className='form-buttons'>
                    <Button type='primary' htmlType='submit' loading={loading}>
                        Sign In
                    </Button>
                    <Link to='/signUp'>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
