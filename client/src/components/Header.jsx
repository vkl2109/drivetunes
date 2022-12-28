import '../css/header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="homeLink">
                <Link to={'/'} className="link-title">
                    <h1 className="homeTitle">Home</h1>
                </Link>
            </div>
            <form className="searchBar">
                <input className="searchInput" type="text" placeholder="Search..."/>
                <button className="searchBtn" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Header  