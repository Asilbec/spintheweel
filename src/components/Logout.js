import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    '1089190183088-5p9erf6e6be5srhk5eau62oh8ims3ikd.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;