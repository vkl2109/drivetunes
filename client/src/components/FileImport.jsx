import ListedFile from './ListedFile.jsx'
import Checkbox from './Checkbox.jsx'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import reformatDate from './Table.jsx'
import '../css/file.css'

const FileImport = ({files, setFiles}) => {
    const [isCheckAll, setIsCheckAll] = useState(false)
    const [isCheck, setIsCheck] = useState([])
    const navigate = useNavigate()
    const [fetchedSongs, setFetchedSongs] = useState([])

    const getSongs = async () => {
        let req = await fetch(
            `http://localhost:3000/songs/`,
            {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            }
        )
        let res = await req.json()
        let fetchedSongIds = res.map((song)=>song.audio)    
        let unaddedSongs = files.items.filter((file) => !fetchedSongIds.includes(file.embedLink))
        setFetchedSongs(unaddedSongs)
    }
        
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(fetchedSongs.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    useEffect(() => {
        getSongs()
    
    }, [])

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const handleSubmit = async () => {
        const postItem = async (songs) =>{
            let req = await fetch(
                `http://localhost:3000/songs/`,
                {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        songs: songs
                    })
                }
            )
            if (req.ok){
                // route to library page
                navigate('/fileManager')
            }
        }
        let postSongs = []
        fetchedSongs.map((file)=>{
            if (isCheck.includes(file.id)){
                let newFile = {
                    name: file.originalFilename.slice(0, -4),
                    id: file.id,
                    embedLink: file.embedLink,
                    createdDate: file.createdDate
                }
                postSongs.push(newFile)
            }
        })
        console.log(postSongs)
        postItem(postSongs)

}
    const reformatDate = (oldDate) => {
        let date = new Date(oldDate);

        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        let reformattedDate = date.toLocaleString('en-US', options);

        return reformattedDate;
    }

    return(
        <div className="fileImportPage">
            <h1>Import Files</h1>
            <div className="manageFileForms">
                <button onClick={()=>{handleSubmit()}}>Add to library</button>
                <br></br>
                <Checkbox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}/>
                Select All
            </div>
            < table >
                <thead>
                    <tr className="TableHeader">
                        <th onClick={() => onSort('name')}>Select</th>
                        <th onClick={() => onSort('name')}>Song Name</th>
                        <th onClick={() => onSort('date_created')}>Date Created</th>
                    </tr>
                </thead>
                <tbody>
    
                {fetchedSongs.map((file)=>{
                        if (file.fileExtension === "mp3" || file.fileExtension === "wav" || file.fileExtension === "m4a"  ) {
                            return (
                            <tr key={file.id}>
                                <Checkbox key={file.id} type="checkbox" name={file.originalName} id={file.id} handleClick={handleClick} isChecked={isCheck.includes(file.id)} />

                                <td>{file.originalFilename.slice(0, -4)}</td>
                                <td>{reformatDate(file.createdDate)}</td>
                            </tr>
                            )
                        }
                    })
                }
                </tbody>
            </table >
            
        </div>

)
}


export default FileImport