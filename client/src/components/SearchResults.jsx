import '../css/search.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const SearchResults = ({ search }) => {

    const [ songs, setSongs ] = useState()
    const [ albums, setAlbums ] = useState()
    const [ artists, setArtists ] = useState()

    useEffect(()=>{
        let newSearch = search.split(' ').join('-')
        const findSongs = async () => {
            let req = await fetch('http://localhost:3000/songs/' + newSearch, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (req.ok) {
                let res = await req.json()
                console.log(res)
                setSongs(res)
                let newReq = await fetch('http://localhost:3000/albums/' + res.album_name.split(' ').join('-'), {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                if (newReq.ok) {
                    let newRes = await newReq.json()
                    console.log(newRes)
                    setAlbums(newRes)
                    let artistReq = await fetch('http://localhost:3000/artists/' + res.artist_name.split(' ').join('-'), {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json'
                        }
                    })
                    if (artistReq.ok) {
                        let artistRes = await artistReq.json()
                        console.log(artistRes)
                        setArtists(artistRes)
                    }
                }
            }
        }
        findSongs();
    },[])

    return (
        <div className="searchContainer">
            <div className="itemsList">
                <h1>Songs:</h1>
                {songs ? (
                    <Link to={`/album/${songs.album_name.split(' ').join('-')}/track/${songs.name.split(' ').join('-')}`}>
                        <h4>{songs.name}</h4>
                    </Link>
                ) :
                (<h4>No Songs Found</h4>)}
            </div>
            <div className="itemsList">
                <h1>Albums:</h1>
                {albums ? (
                    <Link to={`/album/${albums.album.name.split(' ').join('-')}`}>
                        <h4>{albums.album.name}</h4>
                    </Link>
                ) :
                (<h4>No Albums Found</h4>)}
            </div>
            <div className="itemsList">
                <h1>Artists:</h1>
                {artists ? (
                    <Link to={`/artist/${artists.artist.name.split(' ').join('-')}`}>
                        <h4>{artists.artist.name}</h4>
                    </Link>
                ) :
                (<h4>No Artists Found</h4>)}
            </div>
        </div>
    )
}

export default SearchResults;