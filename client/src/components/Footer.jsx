import '../css/header.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom'


const Footer = ({ profile, setProfile }) => {
    const navigate = useNavigate()
    const GAPI_key = import.meta.env.VITE_GAPI_API_KEY
    const clientId = import.meta.env.VITE_GAPI_CLIENT_ID

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: 'https://www.googleapis.com/auth/drive'
            });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    // Define this
    const onFailure = (err) => {
        console.log('failed:', err);
    }

    const logOut = () => {
        setProfile(null);
        navigate("/")
    };

    const getFiles = async (token) => {
        const result = await fetch ('https://www.googleapis.com/drive/v2/files?key=' + GAPI_key, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result.json();
    }

    const onSuccess = (res) => {
        console.log('success:', res);
        setProfile(res.profileObj);
        getFiles(res.accessToken)
        navigate("/home")
    }

    return (
        <div className="footerContainer">
            <div className="login">
            {profile ? (
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />) : (
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
        </div>
    )
}
export default Footer