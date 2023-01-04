import { useState, useEffect } from 'react'
import '../css/home.css'
import ArtistCard from './ArtistCard.jsx'

const Home = ({ profile, gdrive }) => {
    const clientID = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    
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
        // const runFuncs = async ( artist ) => {
        //     let token = await getAccessToken();
        //     let artists = await getArtist(artist, token.access_token);
        //     // console.log(artists);
        //     setArtistsJSON(artistsJSON => [...artistsJSON, artists.artists.items[0]]);
        // }
        // artists.map(artist => {
        //     runFuncs(artist)
        // })
        const getUser = async () => {
            let req = await fetch('http://localhost:3000/users/' + gdrive.googleId,
            {mode: 'cors'})
            if (req.ok) {
                let res = await req.json()
                setArtistsJSON(artistsJSON => res.artists)
                console.log("artists:" + res.artists)
            }
            else {
                console.log(req.error)
            }
        }
        // getUser()
    }, [])
    console.log(artistsJSON)

    return (
        <div className="homePage">
            <div className="titleBar">
                <h1>Your Favorite Artists:</h1>
            </div>
            <div className="artistsCarousel">
                {artistsJSON.map((artistJSON, index) => {
                    return <ArtistCard artistJSON={artistJSON} key={index}/>
                })}
            </div>
            <hr />
        </div>
    )
}

export default Home