import '../css/album.css'
import { Link } from "react-router-dom";

const TrackCard = ({ songJSON }) => {
    return (
        <div className="songCard">
            <Link to={`track/${songJSON.name.split(' ').join('-')}`} className="trackLink">
                <div className="trackBlock">
                    {songJSON.name}
                </div>
            </Link>
        </div>
    )
}
export default TrackCard