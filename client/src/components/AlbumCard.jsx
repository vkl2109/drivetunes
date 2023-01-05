import '../css/artist.css'
import { Link } from "react-router-dom";

const AlbumCard = ({ albumJSON }) => {
    return (
        <div className="albumCard">
            <Link to={`album/${albumJSON.name.split(' ').join('-')}`}>
                <img src={albumJSON.image} alt="no image found" className="albumImg"/>
            </Link>
            {/* <h4>{albumJSON.name}</h4> */}
        </div>
    )
}
export default AlbumCard