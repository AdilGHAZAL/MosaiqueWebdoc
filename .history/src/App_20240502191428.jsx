import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Athlete1 from './Athelete1/Athlete1'; // Correct the file path
import LoginScreen from './LoginScreen';
import MainView from './backoffice';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/athlete1/:id" element={<Athlete1 />} /> // Correct the case and path
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/backoffice" element={<MainView />} /> // Fix spacing issue
            </Routes>
        </Router>
    );
};

export default App;
