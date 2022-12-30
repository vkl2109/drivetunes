import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script';


const GoogleLink = () => {
    
    
    return(
        <div>
            <h1 >Sign in with Google page...</h1>
            {/* <script src="https://accounts.google.com/gsi/client" async defer></script>
            <script>
                {window.onload = function () {
                    google.accounts.id.initialize({
                        client_id: 'drivetunes-372514',
                        callback: handleCredentialResponse
                    });
                google.accounts.id.prompt();
                }}
            </script> */}
        </div>

        
    )

}

export default GoogleLink