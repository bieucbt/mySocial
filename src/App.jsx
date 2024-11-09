import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Friends from './pages/Friends'
import Video from './pages/Video'
import Group from './pages/Group'
import Games from './pages/Games'
import Home from './pages/Home'
import Birthday from './pages/Birthday'

function App() {
  return (
    <Router>
      <div >
        <Header />
        <main >
          <Routes>
            <Route path='mySocial' element={<Home />} />
            <Route path='friends' element={<Friends />}> 
              <Route path='birthday' element={<Birthday />} />
            </Route>
            <Route path='video' element={<Video />} />
            <Route path='group' element={<Group />} />
            <Route path='games' element={<Games />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
