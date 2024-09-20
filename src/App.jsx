import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './pages/landingPage';
import Posts from './components/post';
import Comments from './components/comment';
import Albums from './components/album';
import Photos from './components/photos';
import Todos from './components/todo';
import Users from './components/users';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
      
         <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
         <Route path="/posts" element={<Posts />} />
           <Route path="/comments" element={<Comments />} />
           <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
           <Route path="/todos" element={<Todos />} />
           <Route path="/users" element={<Users />} />   
        </Routes>
      </div>
    </Router>
  );
};

export default App;
