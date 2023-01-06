import { useState, useEffect } from 'react'
import '../css/home.css'
import ArtistCard from './ArtistCard.jsx'
import AlbumCard from './AlbumCard.jsx'

const Home = ({ profile, gdrive }) => {
    const clientID = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET
    
    const artists = ['Drake', 'Madonna', 'Elvis', 'Beatles', 'Cannonball']
    const [ artistsJSON, setArtistsJSON ] = useState([]);
    const [ albumsJSON, setAlbumsJSON ] = useState([]);


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
        const result = await fetch ('https://api.spotify.com/v1/search?q=' + keyword + '&type=album', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result.json();
    }

    const getAlbumTracks = async (keyword, token) => {
        const result = await fetch ('https://api.spotify.com/v1/albums/' + keyword + '/tracks', {
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
            let album = await getAlbumTracks(artists.albums.items[0].id, token.access_token);
            console.log("album");
            console.log(album);
            // setArtistsJSON(artistsJSON => [...artistsJSON, artists.artists.items[0]]);
        }
        runFuncs("Abbey Road")
        const getUser = async () => {
            let req = await fetch('http://localhost:3000/users/' + gdrive.googleId,
            {mode: 'cors'})
            if (req.ok) {
                let res = await req.json()
                setArtistsJSON(artistsJSON => res.artists)
                setAlbumsJSON(albumsJSON => res.albums)
                console.log(res)
            }
            else {
                console.log(req.error)
            }
        }
        getUser()
    }, [])
    console.log(artistsJSON)

    return (
        <div className="homePage">
            
                <div className="artistsCarousel">
                    {artistsJSON.map((artistJSON, index) => {
                        return <ArtistCard artistJSON={artistJSON} key={index}/>
                    })}
                </div>
                {/* <hr classname="homePageDivider"/> */}
            
                <div className="artistsCarousel">
                    {albumsJSON.map((albumJSON, index) => {
                        return <AlbumCard albumJSON={albumJSON} key={index}/>
                    })}
                </div>
            
        </div>
    )
}

export default Home