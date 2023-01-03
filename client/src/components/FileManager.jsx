import ListedFile from './ListedFile.jsx'

const FileManager = ({files}) => {
    console.log(files.items)

    return(
        <div>
            <ol>
                {
                    files.items.map((file)=>{
                        if (file.fileExtension === "mp3" || file.fileExtension === "wav" ) {
                            return (
                                <ListedFile file={file} />
                            )
                        }
                        
                    })
                }
            </ol>
        </div>
    )
}

export default FileManager