import { useState } from 'react'


const Table = ({ songs, setSongs, isCheck, setIsCheck }) => {    
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
    const handleClick = e => {
        const { name, checked } = e.target;
        setIsCheck([...isCheck, name]);
        if (!checked) {
            setIsCheck(isCheck.filter(i => i !== item));
        }
        console.log(isCheck)
    };

    return(
        <table>
            <thead>
                <tr className="TableHeader">
                    <th>Select</th>
                    <th onClick={() => onSort('name')}>Song Name</th>
                    <th onClick={() => onSort('album_name')}>Album</th>
                    <th onClick={() => onSort('artist_name')}>Artist</th>
                    <th onClick={() => onSort('date_created')}>Date Created</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(item => (
                    <tr key={item.id}>
                        <input
                            id={item.id}
                            type="checkbox"
                            name={item.name}
                            onChange={handleClick}
                            // handleClick={handleClick}
                            isChecked={isCheck.includes(item.id)}
                        />
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