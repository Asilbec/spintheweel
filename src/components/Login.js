import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token

const clientId =
    '1089190183088-5p9erf6e6be5srhk5eau62oh8ims3ikd.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;