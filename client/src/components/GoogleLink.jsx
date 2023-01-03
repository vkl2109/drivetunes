import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';

const GoogleLink = () => {
    const clientId = '14235695944-9kjep8ne6j4mhjo5518deljkmrfbmgu5.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: 'https://www.googleapis.com/auth/drive'
            });
        };
        gapi.load('client:auth2', initClient);
    });

    // Define this for a successful login
    const onSuccess = (res) => {
        console.log('success:', res);

    };

    // Define this
    const onFailure = (err) => {
        console.log('failed:', err);}
    
    return(
        <div className="GoogleSignInBtn">
            <h1 >Sign in with Google page...</h1>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>

        
    )

}

export default GoogleLink