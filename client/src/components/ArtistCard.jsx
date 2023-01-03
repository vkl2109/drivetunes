import '../css/home.css'
import { Link } from "react-router-dom";

const ArtistCard = ({ artistJSON }) => {
    return (
        <div className="artistCard">
            <Link to={`/artist/${artistJSON.name.split(' ').join('-')}`}>
                <img src={artistJSON.image} alt="no image found" className="artistImg"/>
            </Link>
            <h4>{artistJSON.name}</h4>
        </div>
    )
}
export default ArtistCard