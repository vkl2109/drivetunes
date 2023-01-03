import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const GoogleLink = () => {
    const clientId = '14235695944-9kjep8ne6j4mhjo5518deljkmrfbmgu5.apps.googleusercontent.com';
    const [profile, setProfile] = useState([]);

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
        setProfile(res.profileObj);

    };

    const logOut = () => {
        setProfile(null);
    };

    // Define this
    const onFailure = (err) => {
        console.log('failed:', err);}
    
    return(
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>

        
    )

}

export default GoogleLink