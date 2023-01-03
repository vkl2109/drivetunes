import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import ArtistPage from './components/ArtistPage.jsx'
import TrackPage from './components/TrackPage.jsx'
import FileManager from './components/FileManager.jsx'
import GoogleLink from './components/GoogleLink'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [profile, setProfile] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/home'} element={<Home />}/>
          <Route path={'/artist/:artist'}>
            <Route index element={<ArtistPage />} />
            <Route path={'track/:track'} element={<TrackPage />} />
          </Route>
          <Route path={'/'} element={<GoogleLink />}/>
          <Route path={'/filemanager'} element={<FileManager />}/>
        </Routes>
        <Footer profile={profile} setProfile={setProfile}/>
      </BrowserRouter>
    </div>
  )
}

export default App
