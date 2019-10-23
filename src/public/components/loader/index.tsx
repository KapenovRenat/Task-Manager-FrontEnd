import { Spin } from 'antd';
import * as React from 'react';

const BigLoader = () => {
    return (
        <div className='big-loader'>
            <Spin size="large" />
        </div>
    );
};

export default BigLoader;
