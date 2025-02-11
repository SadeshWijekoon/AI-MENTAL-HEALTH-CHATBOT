// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import Chat from './pages/Chat';
import Feed from './Pages/Feed';
import LiveConsultation from './pages/Live';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/live-consultation" element={<LiveConsultation />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;