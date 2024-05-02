// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'; // Import the CSS file
import HomePage from './components/HomePage';
import Athlete1 from './Athelete1/Athlete1'; // Import the NouvellePage component
import LoginScreen from './LoginScreen';
import MainView from './backoffice';
const App = () => {
    return (
        <Router>
            
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/Athlete1" element={<Athlete1/>} />
                    <Route path="/login" element={<LoginScreen/>  }/>
                    <Route path='/backoffice'element={<MainView/>}/>
                </Routes>
            
        </Router>
    );
};

export default App;
