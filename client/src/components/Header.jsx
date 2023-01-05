import '../css/header.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ profile, search, setSearch }) => {

    const [ input, setInput ] = useState('')
    const [ dropDown, setDropDown] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(search => input);
        setInput('');
        navigate('/search');
    }
    return (
        <div className="headerContainer">
            <div className="homeLink">
                <Link to={profile ? '/home' : '/'} className="link-title">
                    <img className="headerLogo" src="https://github.com/vkl2109/drivetunes/blob/main/dt-logo-large.png?raw=true" />
                </Link>
            </div>
            <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
                <input className="searchInput" type="text" placeholder="Search..." value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button className="searchBtn" type="submit">🔍</button>
            </form>
            {profile ? (
                <div className="dropdown">
                    <h2 onClick={()=>setDropDown(dropDown => !dropDown)} className="welcome">Welcome {profile.givenName}!</h2>
                    <div className="dropdown-content" style={{ display: dropDown ? 'block' : 'none'}}>
                        <h4 onClick={()=>{navigate('/fileManager')}}>Manage Files</h4>
                        <h4 onClick={()=>{navigate('/fileImport')}}>Import Files</h4>
                    </div>
                </div>
            ) : (<div> </div>)}
        </div>
    )
}

export default Header  