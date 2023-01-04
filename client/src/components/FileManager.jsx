import { useState, useEffect, useRef } from 'react';
import Table from './Table.jsx'
import Checkbox from './Checkbox.jsx'
import '../css/file.css'

const FileManager = () => {
    const [songs, setSongs] = useState([])
    const [isCheck, setIsCheck] = useState([])

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

    return (
        <div className="fileImportPage">
            <h1>Manage Files</h1>
            <Table songs={songs} setSongs={setSongs} isCheck={isCheck} setIsCheck={setIsCheck} />
        </div>
    )
}

export default FileManager