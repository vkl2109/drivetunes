import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
import '../css/googleLink.css'

const GoogleLink = () => {
        
    return(<div className="Splash">
        {/* <img src="src/assets/footerGradient.png" alt="" className="footerGradient"/> */}
        <img src="src/assets/splashContent.png" alt="" className="splashContent"/>
        <div className="bottomGradient"></div>
    </div>
    )
}

export default GoogleLink