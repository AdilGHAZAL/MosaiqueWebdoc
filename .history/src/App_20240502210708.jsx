import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Athlete1 from './Athelete1/Athlete1'; // Correct the file path
import LoginScreen from './LoginScreen';
import MainView from './backoffice';
import TrainingPage from './TrainingPage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TrainingPage/>} />
                <Route path="/athlete/:id" element={<Athlete1 />} /> 
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/backoffice" element={<MainView />} /> 
            </Routes>
        </Router>
    );
};

export default App;
