import '../css/header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="homeLink">
                <Link to={'/home'} className="link-title">
                    <img className="headerLogo" src="https://github.com/vkl2109/drivetunes/blob/main/dt-logo-large.png?raw=true" />
                </Link>
            </div>
            <form className="searchBar">
                <input className="searchInput" type="text" placeholder="Search..."/>
                <button className="searchBtn" type="submit">🔍</button>
            </form>
        </div>
    )
}

export default Header  