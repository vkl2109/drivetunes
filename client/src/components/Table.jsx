import Checkbox from './Checkbox.jsx'
import { useState } from 'react'


const Table = ({ songs, setSongs, isCheck, setIsCheck, handleClick }) => {    
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
    
    // selecting songs with checkbox
    // const handleClick = e => {
    //     // console.log(e.target)
    //     const { id, checked } = e.target;
    //     setIsCheck([...isCheck, id]);
    //     if (!checked) {
    //         setIsCheck(isCheck.filter(item => item !== id));
    //     }
    // };

    const onSort = (key) => {
        let sortedSongs = [...songs]
        
        sortedSongs.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            console.log(a[key])
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
                    <th onClick={() => onSort('album_name')}>Album</th>
                    <th onClick={() => onSort('artist_name')}>Artist</th>
                    <th onClick={() => onSort('date_created')}>Date Created</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(item => (
                    <tr key={item.id}>
                        <Checkbox key={item.id} type="checkbox" name={item.originalName} id={item.id} handleClick={handleClick} isChecked={isCheck.includes(item.id)} />
                        <td>{item.name}</td>
                        <td>{item.album_name}</td>
                        <td>{item.artist_name}</td>
                        <td>{reformatDate(item.date_created)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table