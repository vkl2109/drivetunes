import ListedFile from './ListedFile.jsx'
import Checkbox from './Checkbox.jsx'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../css/file.css'

const FileImport = ({files, setFiles}) => {
    const [isCheckAll, setIsCheckAll] = useState(false)
    const [isCheck, setIsCheck] = useState([])
    console.log(files.items)
    const navigate = useNavigate()
        
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(files.items.map(li => li.id));
        if (isCheckAll) {
        setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const handleSubmit = () => {
        
        const postItem = async (file) =>{
            let fileName = file.originalFilename.slice(0, -4).split(' ').join('-')
            let req = await fetch(
                `http://localhost:3000/songs/${fileName}`,
                {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        audio: file.embedLink,
                        file_id: file.id,
                        date_created: file.createdDate
                    })
                }
            )
        }
        // map with post request
        files.items.map( async (file)=>{
            if(isCheck.includes(file.id)){
                // console.log(file.originalFilename)
                await postItem(file)
            }
        })

        // route to library page
        navigate('/fileManager')
}

    return(
        <div className="fileImportPage">
            <h1>Import Files</h1>
            <div>
                <button onClick={()=>{handleSubmit()}}>Add to library</button>
                <Checkbox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                />
                Select All
            </div>
            <ol>

                {
                    files.items.map((file)=>{
                        if (file.fileExtension === "mp3" || file.fileExtension === "wav" || file.fileExtension === "m4a"  ) {
                            return (
                                <li>
                                <Checkbox key={file.id} type="checkbox" name={file.originalName} id={file.id} handleClick={handleClick} isChecked={isCheck.includes(file.id)} />
                                {file.originalFilename.slice(0, -4)}
                                {/* <ListedFile file={file}/> */}
                                </li>
                            )
                        }
                        
                    })
                }
            </ol>
        </div>
    )
}

export default FileImport