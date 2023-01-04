import { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import '../css/track.css'

const FileManager = () => {
    const GAPI_key = import.meta.env.VITE_GAPI_API_KEY
    const waveformRef = useRef();
    const [currentTrack, setCurrentTrack] = useState()

    if (waveformRef.current) {
        var wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            barWidth: 3,
            barRadius: 3,
            barGap: 2,
            barMinHeight: 1,
            cursorWidth: 1,
            backend: "WebAudio",
            height: 80,
            progressColor: "#FE6E00",
            responsive: true,
            waveColor: "#C4C4C4",
            cursorColor: "transparent"
        });
        // below is the downloadUrl from google, which seems to be closest to working. Error is The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
        wavesurfer.load(`https://www.googleapis.com/drive/v2/files/1Pi7K0By1_S2Sl_C2OSBmYDY0llzS1Yz0?key=${GAPI_key}&alt=media&source=downloadUrl`)
    }

    return (
        <div className="trackPage">
            
            <div ref={waveformRef} className="waveform"></div>
            <button onClick={() => wavesurfer.playPause()}>Play/Pause</button>
        </div>
    )
}

export default FileManager