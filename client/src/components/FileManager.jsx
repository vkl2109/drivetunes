import { useState, useEffect, useRef } from 'react';
import Checkbox from './Checkbox.jsx'

const FileManager = () => {
    const [songs, setSongs] = useState([])
    const [isCheck, setIsCheck] = useState([])

    useEffect(() => {
        getSongs()
    }, [])
    
    // fetch for all songs
    const getSongs = async () =>{
        let req = await fetch(

        )
        let res = await req.json
        setSongs(res)
    }

    // selecting songs with checkbox
    const handleClick = e => {
        console.log(e.target)
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    return (
        <div>
            {songs.map(file=>{
                <Checkbox key={file.id} type="checkbox" name={file.originalName} id={file.id} handleClick={handleClick} isChecked={isCheck.includes(file.id)} />
                //<table row>
            })}
        </div>
    )
}

export default FileManager