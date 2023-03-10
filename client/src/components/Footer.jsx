import '../css/header.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom'

const Footer = ({ profile, setProfile, setFiles, setGdrive }) => {
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
            }}
        )
        let req = await result.json()
        return req;
    }

    const onSuccess = async (res) => {
        console.log('success:', res);
        setProfile(res.profileObj);
        setGdrive(gdrive => res)
        console.log(res)
        setFiles(await getFiles(res.accessToken))
        navigate("/home")
        console.log(res.profileObj.imageUrl)
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