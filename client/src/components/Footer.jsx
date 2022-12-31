import '../css/header.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div >
                <Link to={'/googleLink'} className="link-title">
                    <h3 className="googleSignUpLink">Sign in with Google</h3>
                </Link>
            </div>
        </div>
    )
}
export default Footer