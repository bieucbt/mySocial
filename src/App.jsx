import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Friends from './pages/Friends'
import Video from './pages/Video'
import Group from './pages/Group'
import Games from './pages/Games'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Requests from './pages/Requests'
import SuggestionsPage from './pages/SuggestionsPage'
import AllFriends from './pages/AllFriends'
import FriendCustomList from './pages/FriendCustomList';
import Reels from './pages/Reels'


function App() {
  
  return (
    <Router>
      <div >
        <Header />
        <main >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='friends' element={<Friends />} />  
            <Route path='friends/request' element={<Requests />} />
            <Route path='friends/suggestions' element={<SuggestionsPage />} />
            <Route path='friends/allfriend' element={<AllFriends />} />
            <Route path='friends/friendCustom' element={<FriendCustomList />} />
            <Route path='video' element={<Video />} />
            <Route path='group' element={<Group />} />
            <Route path='games' element={<Games />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='reel' element={<Reels />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
