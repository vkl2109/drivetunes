import { useState, useEffect } from 'react'
import '../css/home.css'
import ArtistCard from './ArtistCard.jsx'

const Home = () => {
    // const clientID = import.meta.env.VITE_CLIENT_ID
    const clientID = "9ceb72ef8b7c489392d759addec3f11d"
    // const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    const clientSecret = "772b5acad2f449ee8c605819e28e1a32"
    const artists = ['Drake', 'Madonna', 'Elvis', 'Beatles', 'Cannonball']
    const [ artistsJSON, setArtistsJSON ] = useState([]);

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

    useEffect(() => {
        const runFuncs = async ( artist ) => {
            let token = await getAccessToken();
            let artists = await getArtist(artist, token.access_token);
            // console.log(artists);
            setArtistsJSON(artistsJSON => [...artistsJSON, artists.artists.items[0]]);
        }
        artists.map(artist => {
            runFuncs(artist)
        })
    }, [])
    console.log(artistsJSON)

    return (
        <div className="homePage">
            <div className="titleBar">
                <h1>Artists:</h1>
            </div>
            <div className="artistsCarousel">
                {artistsJSON.map(artistJSON => {
                    return <ArtistCard artistJSON={artistJSON} />
                })}
            </div>
            <hr />
        </div>
    )
}

export default Home