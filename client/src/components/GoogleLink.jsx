import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';

const GoogleLink = () => {
    const navigate = useNavigate()
    const clientId = '14235695944-9kjep8ne6j4mhjo5518deljkmrfbmgu5.apps.googleusercontent.com';
    const [profile, setProfile] = useState();
    const [ files, setFiles ] = useState([])
    const GAPI_key = import.meta.env.VITE_GAPI_API_KEY

    const getFiles = async (token) => {
        const result = await fetch ('https://www.googleapis.com/drive/v2/files?key=' + GAPI_key, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result;
    }

    // Define this for a successful login
    const onSuccess = (res) => {
        console.log('success:', res);
        setProfile(res.profileObj);
        navigate("/home")

        // const stream = getFiles(res.tokenId).body
        // stream.on('data', (chunk) => {
        //     console.log(chunk.toString());
        // })

        // console.log(gapi.client.drive.files.list({}))
    };

    function execute() {
        return gapi.client.drive.files.list({})
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
                function (err) { console.error("Execute error", err); });
    }


    
    return(<div className="Splash">
        <img src="src/assets/footerGradient.png" alt="" className="footerGradient"/>
        <img src="src/assets/splashContent.png" alt="" className="splashContent"/>
    </div>
    )

}

export default GoogleLink