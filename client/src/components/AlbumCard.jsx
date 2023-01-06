import '../css/artist.css'
import { Link } from "react-router-dom";

const AlbumCard = ({ albumJSON }) => {
    return (
        <div >
            <Link to={`/album/${albumJSON.name.split(' ').join('-')}`} className="hide">
                <img src={albumJSON.image} alt="no image found" className="albumCardImg"/>
            </Link>
        </div>
    )
}
export default AlbumCard