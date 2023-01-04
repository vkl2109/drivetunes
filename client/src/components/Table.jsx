import Checkbox from './Checkbox.jsx'
import { useState } from 'react'

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

const Table = ({songs, setSongs, isCheck, setIsCheck}) => {    
    
    // selecting songs with checkbox
    const handleClick = e => {
        // console.log(e.target)
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const onSort = (key) => {
        let sortedSongs = [...songs]
        
        sortedSongs.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        });


        setSongs(sortedSongs)
    }

    return(
        <table>
            <thead>
                <tr className="TableHeader">
                    <th onClick={() => onSort('name')}>Select</th>
                    <th onClick={() => onSort('name')}>Song Name</th>
                    <th onClick={() => onSort('')}>Album</th>
                    <th onClick={() => onSort('')}>Artist</th>
                    <th onClick={() => onSort('date_created')}>Date Created</th>
                </tr>
            </thead>
            <tbody>
            {/* <hr></hr> */}
                {songs.map(item => (
                    <tr key={item.song.id}>
                        <Checkbox key={item.song.id} type="checkbox" name={item.song.originalName} id={item.song.id} handleClick={handleClick} isChecked={isCheck.includes(item.song.id)} />
                        <td>{item.song.name}</td>
                        <td>{item.album}</td>
                        <td>{item.artist}</td>
                        <td>{reformatDate(item.song.date_created)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table