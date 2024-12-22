import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import About from './components/About';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
