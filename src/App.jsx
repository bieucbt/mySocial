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
            <Route path='/mySocial' element={<Home />} />
            <Route path='mySocial/friends' element={<Friends />} />  
            <Route path='mySocial/friends/request' element={<Requests />} />
            <Route path='mySocial/friends/suggestions' element={<SuggestionsPage />} />
            <Route path='mySocial/friends/allfriend' element={<AllFriends />} />
            <Route path='mySocial/friends/friendCustom' element={<FriendCustomList />} />
            <Route path='mySocial/video' element={<Video />} />
            <Route path='mySocial/group' element={<Group />} />
            <Route path='mySocial/games' element={<Games />} />
            <Route path='mySocial/Profile' element={<Profile />} />
            <Route path='mySocial/reel' element={<Reels />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
