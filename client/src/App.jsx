import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import ArtistPage from './components/ArtistPage.jsx'
import TrackPage from './components/TrackPage.jsx'
import FileManager from './components/FileManager.jsx'
import GoogleLink from './components/GoogleLink'
import SearchResults from './components/SearchResults.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [profile, setProfile] = useState();
  const [ search, setSearch ] = useState('');
  const [ gdrive, setGdrive ] = useState();
  const [files, setFiles] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Header profile={profile} search={search} setSearch={setSearch}/>
        <Routes>
          <Route path={'/home'} element={<Home profile={profile} gdrive={gdrive}/>}/>
          <Route path={'/search'} element={<SearchResults search={search}/>}/>
          <Route path={'/artist/:artist'}>
            <Route index element={<ArtistPage />} />
            <Route path={'track/:track'} element={<TrackPage />} />
          </Route>
          <Route path={'/'} element={<GoogleLink />}/>
          <Route path={'/filemanager'} element={<FileManager files={files}/>}/>
        </Routes>
        <Footer profile={profile} setProfile={setProfile} setGdrive={setGdrive} setFiles={setFiles}/>
      </BrowserRouter>
    </div>
  )
}

export default App
