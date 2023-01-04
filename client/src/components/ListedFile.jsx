const ListedFile = ({ file, isChecked, setIsChecked }) => {

    const trackName = file.originalFilename.slice(0,-4)

    return(
        <li>
          {trackName}
        </li>
    )
}

export default ListedFile