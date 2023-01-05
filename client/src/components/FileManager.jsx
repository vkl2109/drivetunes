import { useState, useEffect, useRef } from 'react';
import Table from './Table.jsx'
import '../css/file.css'

const FileManager = ( {profile}) => {
    const [songs, setSongs] = useState([])
    const [isCheck, setIsCheck] = useState([])
    const [songInput, setSongInput] = useState("")
    const [albumInput, setAlbumInput] = useState("")
    const [artistInput, setArtistInput] = useState("")

    useEffect(() => {
        getSongs()
    }, [])
    
    const getSongs = async () =>{
        let req = await fetch(
            `http://localhost:3000/songs/`,
            {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            }
        )
        let res = await req.json()
        console.log(res)
        setSongs(res)
    }

    const handleNameForm = (e) => {
        e.preventDefault()

        const changeSong = async (originalSong) => {
            let newSong = originalSong.split(" ").join("-")
            
            let req = await fetch(
                `http://localhost:3000/songs/${newSong}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name: songInput
                    })
                }
            )
        }
        // console.log(songInput)
        isCheck.map((originalSong)=>{
            changeSong(originalSong)
            // setSongs(songs => [...songs, originalSong.album: artistInput])
        })

        setSongInput("")
    }

    const handleArtistAlbumForm = (e) => {
        e.preventDefault()

        const changeArtistAlbum = async (originalSong) => {

            let req = await fetch(
                `http://localhost:3000/users/${profile.googleId}/song`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name: songInput,
                        artist: artistInput,
                        album: albumInput,
                        song: originalSong
                    })
                }
            )
        }


        isCheck.map((originalSong) => {
            changeArtistAlbum(originalSong)
        })
        

        setAlbumInput("")
        setArtistInput("")
    }
   

    return (
        <div className="fileImportPage">
            <h1>Manage Files</h1>
            <div className="manageFileForms">
                <form className="changeNameForm" onSubmit={(e)=>handleNameForm(e)} >
                    <input type="text" placeholder="Song" value={songInput} onChange={(e)=>setSongInput(e.target.value)}></input>
                    <button type="submit" >Update Name</button>
                </form>
                
                <form className="artistAlbumForm" onSubmit={(e)=>handleArtistAlbumForm(e)}>
                    <input type="text" placeholder="Album" value={albumInput} onChange={(e) => setAlbumInput(e.target.value)}></input>
                    <input type="text" placeholder="Artist" value={artistInput} onChange={(e) => setArtistInput(e.target.value)}></input>
                    <button type="submit">Update Album & Artist</button>
                </form>
            </div>
            <Table
            //  handleClick={handleClick} 
             songs={songs} setSongs={setSongs} isCheck={isCheck} setIsCheck={setIsCheck} />
        </div>
    )
}

export default FileManager