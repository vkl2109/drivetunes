import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TrackCard from './TrackCard.jsx'
import '../css/album.css'

const AlbumPage = () => {
    const { album } = useParams()
    const albumName = album.split('-').join(' ')
    const [ albumObject, setAlbumObject ] = useState();
    const [ albumImg, setAlbumImg ] = useState();
    const [ songsJSON, setSongsJSON ] = useState([]);

    useEffect(() => {
        const getAlbum = async () => {
            let req = await fetch('http://localhost:3000/albums/' + album,
            {mode: 'cors'})
            if (req.ok) {
                let res = await req.json()
                setAlbumObject(albumObject => res.album)
                setAlbumImg(albumImg => res.album.image)
                setSongsJSON(songsJSON => res.songs)
                console.log(res)
            }
            else {
                console.log('error')
            }
        }
        getAlbum()
    }, [])

    return (
        <div className="albumPage">
            <div className="albumTitle">
                <img src={albumImg} alt="no image found" className="albumImg"/>
                <h1>{ albumName }</h1>
            </div>
            <hr />
            <div className="songList">
                {songsJSON.map((songJSON, index) => {
                    return <TrackCard songJSON={songJSON} key={index}/>
                })}
            </div>
        </div>
    )
}
export default AlbumPage