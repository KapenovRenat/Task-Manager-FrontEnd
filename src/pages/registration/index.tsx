import * as React from 'react';

const RegistrationPage = ({path}: any) => {
    const submit = () => {
      console.log('Good');
    };

    return (
        <div className="authorization">
            <form onSubmit={submit}>
            </form>
        </div>
    );
}

export default RegistrationPage;
