import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import ArtistPage from './components/ArtistPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/artist/:artist'} element={<ArtistPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
