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
            <div>
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
    
                {files.items.map((file)=>{
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