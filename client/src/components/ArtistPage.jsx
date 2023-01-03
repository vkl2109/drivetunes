import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../css/artist.css'

const ArtistPage = () => {
    const { artist } = useParams()
    const artistURL = artist.split('-').join(' ')
    const clientID = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    const [ artistTracks, setArtistTracks ] = useState([]);    
    const [ artistObject, setArtistObject ] = useState({});
    const [ artistImgUrl, setArtistImgUrl ] = useState();    

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

    const getArtist = async (keyword, token) => {
        const result = await fetch ('https://api.spotify.com/v1/search?q=' + keyword + '&type=artist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result.json();
    }

    const getTracks = async (keyword, token) => {
        const result = await fetch (`https://api.spotify.com/v1/artists/${keyword}/top-tracks?country=US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result.json();
    }

    useEffect(() => {
        const runFuncs = async ( artist ) => {
            let token = await getAccessToken();
            let artistObj = await getArtist(artist, token.access_token);
            console.log(artistObj.artists.items[0])
            setArtistObject(artistObject => artistObj.artists.items[0]);
            setArtistImgUrl(artistImgUrl => artistObj.artists.items[0].images[0].url)
            let topTracks = await getTracks (artistObj.artists.items[0].id, token.access_token)
            setArtistTracks(artistTracks => topTracks.tracks);
            console.log(topTracks);
        }
        runFuncs(artistURL)
    }, [])

    return (
        <div className="artistPage">
            <div className="artistTitle">
                <img src={artistImgUrl} alt="no image found" className="artistImg"/>
                <h1>{ artistURL }</h1>
            </div>
            <div className="artistTracks">
                {artistTracks.map((track, index)=>{
                    return(
                        <div className="trackBlock" key={index}>
                             <Link to={`track/${track.name.split(' ').join('-')}`} className="trackLink">
                                {index + 1}. {track.name}
                             </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ArtistPage