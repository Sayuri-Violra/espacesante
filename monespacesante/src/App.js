import React from 'react';
import Message from './message.js';
import Navbar from './Navbar.js';
import Content1 from './Content1.js';
import Activer from './activer/Activer.js';
import Connecter from './activer/Connecter.js';
import BackToTopText from "./components/BackToTopButton.js";
import BackToTopButton from "./components/BackToTopButton.js";
import Questionnaire from './activer/Les Question/Questionnaire.js';
import WholePie from './activer/The Whole Pie.js';
import Enfant from './activer/Les Question/Enfant.js';
import Mois from './activer/Les Question/Mois.js';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <BackToTopText/>
    <Routes>
      <Route path='/' Component={Content1} />
      <Route path='/Activer' Component={Activer}/>  
      <Route path='/Connecter' Component={Connecter}/> 
      <Route path='/Questionnaire' Component={Questionnaire}/>  
      <Route path='/WholePie' Component={WholePie}/>
      <Route path='/Enfant' Component={Enfant}/>
      <Route path='/Mois' Component={Mois}/>

    </Routes>
    <BackToTopButton/>
      </>
        );
};

export default App;