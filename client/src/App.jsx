import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import ArtistPage from './components/ArtistPage.jsx'
import AlbumPage from './components/AlbumPage.jsx'
import TrackPage from './components/TrackPage.jsx'
import FileImport from './components/FileImport.jsx'
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
            <Route path={'album/:album'}>
              <Route index element={<AlbumPage />} />
              <Route path={'track/:track'} element={<TrackPage />} />
            </Route>
          </Route>
          <Route path={'/'} element={<GoogleLink />}/>
          <Route path={'/fileImport'} element={<FileImport files={files} setFiles={setFiles} />}/>
          <Route path={'./FileManager'} element={<FileManager />} />
        </Routes>
        <Footer profile={profile} setProfile={setProfile} setGdrive={setGdrive} setFiles={setFiles}/>
      </BrowserRouter>
    </div>
  )
}

export default App
