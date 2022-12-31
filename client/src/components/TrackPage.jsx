import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TrackPage = () => {
    const { track } = useParams();
    const clientID = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    const [ currentTrack, setCurrentTrack ] = useState()

    const getAccessToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        return result.json();
    }

    const getTracks = async (keyword, token) => {
        const result = await fetch ('https://api.spotify.com/v1/search?q=' + keyword + '&type=track', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result.json();
    }

    useEffect(() => {
        const runFuncs = async ( track ) => {
            let token = await getAccessToken()
            let trackObj = await getTracks(track, token.access_token);
            console.log(trackObj.tracks.items[0]);
            setCurrentTrack(currentTrack => trackObj.tracks.items[0])
        }
        runFuncs( track )
    }, [])

    return (
        <div>
            {track}
        </div>
    )
}
export default TrackPage