import { Button, Icon, Input } from 'antd';
import * as React from 'react';

const RegistrationPage = ({path}: any) => {
    const submit = () => {
      console.log('Good');
    };

    return (
        <div className='authorization'>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <Icon className='form-icon' type='user' style={{ color: 'rgba(0,0,0,.8)' }} />
                    <input
                        placeholder='Email'
                    />
                </div>
                <div className='form-group'>
                    <Icon className='form-icon' type='lock' style={{ color: 'rgba(0,0,0,.8)' }} />
                    <Input
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <div className='form-buttons'>
                    <Button type='primary'>
                        Log in
                    </Button>
                    Or <a href=''>register now!</a>
                </div>
            </form>
        </div>
    );
}

export default RegistrationPage;
