import ListedFile from './ListedFile.jsx'
import Checkbox from './Checkbox.jsx'
import { useState, useEffect } from 'react'

const FileManager = ({files, setFiles}) => {
    const [isCheckAll, setIsCheckAll] = useState(true)
    const [isCheck, setIsCheck] = useState([])
    console.log(files.items)
    
        //dont think this is needed
        // useEffect(()=>{setFiles(files)},[files])
    
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(files.items.map(li => li.id));
        if (isCheckAll) {
        setIsCheck([]);
        }
    };

    //confused on this one
    const handleClick = e => {
        console.log(e.target)
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };


    return(
        <div>
            <div>
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

export default FileManager