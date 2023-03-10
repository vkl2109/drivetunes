import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import '../css/track.css'

const TrackPage = () => {
    const { track } = useParams();
    const trackURL = track.split('-').join(' ');
    const waveformRef = useRef();
    // const clientID = import.meta.env.VITE_CLIENT_ID
    // const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    const [ currentTrack, setCurrentTrack ] = useState()

    // const getAccessToken = async () => {
    //     const result = await fetch('https://accounts.spotify.com/api/token', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
    //         },
    //         body: 'grant_type=client_credentials'
    //     });
    //     return result.json();
    // }

    // const getTracks = async (keyword, token) => {
    //     const result = await fetch ('https://api.spotify.com/v1/search?q=' + keyword + '&type=track', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     return result.json();
    // }

    useEffect(() => {
        // const runFuncs = async ( track ) => {
        //     let token = await getAccessToken()
        //     let trackObj = await getTracks(track, token.access_token);
        //     console.log(trackObj.tracks.items[0]);
        //     let firstTrack = trackObj.tracks.items[0];
        //     setCurrentTrack(currentTrack => firstTrack)
        // }
        // runFuncs( trackURL )
        const getSong = async () => {
            let req = await fetch('http://localhost:3000/songs/' + track,
            {mode: 'cors'})
            if (req.ok) {
                let res = await req.json()
                setCurrentTrack(currentTrack => res)
                console.log(res)
            }
            else {
                console.log('error')
            }
        }
        getSong()
    }, [])

    if (waveformRef.current) {
        var wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            barWidth: 3,
            barRadius: 3,
            barGap: 2,
            barMinHeight: 1,
            cursorWidth: 1,
            backend: "WebAudio",
            height: 80,
            progressColor: "#FE6E00",
            responsive: true,
            waveColor: "#C4C4C4",
            cursorColor: "transparent"
        });
        wavesurfer.load(currentTrack.audio)
    }

    return (
        <div className="trackPage">
            <h1>{trackURL}</h1>
            <div className="playTrack">
                <button onClick={() => wavesurfer.playPause()} className="playBtn">Play/Pause</button>
                <div ref={waveformRef} className="waveform"></div>
            </div>
        </div>
    )
}
export default TrackPage