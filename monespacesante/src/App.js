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
import Travail from './activer/Les Question/Travail.js';
import Dors from './activer/Les Question/Dors.js';
import écran from './activer/Les Question/écran.js';
import Sittin from './activer/Les Question/Sittin.js';
import ActPh from './activer/Les Question/ActPh.js';
import Food from './activer/Les Question/Food.js';
import Salt from './activer/Les Question/Salt.js';
import Fat from './activer/Les Question/Fat.js';
import Doc from './activer/Les Question/Doc.js';
import Dentist from './activer/Les Question/Dentist.js';
import Tension from './activer/Les Question/Tension.js';
import Blood from './activer/Les Question/Blood.js';
import Frottis from './activer/Les Question/Frottis.js';
import Vaccin from './activer/Les Question/Vaccin.js';
import Lecture from './activer/Les Question/Lecture.js';
import Alcohol from './activer/Les Question/Alcohol.js';
import Glass from './activer/Les Question/Glass.js';
import Fume from './activer/Les Question/Fume.js';
import Priority from './activer/Les Question/Priorité.js';
import Report from './activer/Les Question/Report.js';
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
      <Route path='/Travail' Component={Travail}/>
      <Route path='/Dors' Component={Dors}/>
      <Route path='/écran' Component={écran}/>
      <Route path='/Sittin' Component={Sittin}/>
      <Route path='/ActPh' Component={ActPh}/>
      <Route path='/Food' Component={Food}/>
      <Route path='/Salt' Component={Salt}/>
      <Route path='/Fat' Component={Fat}/>
      <Route path='/Doc' Component={Doc}/>
      <Route path='/Dentist' Component={Dentist}/>
      <Route path='/Tension' Component={Tension}/>
      <Route path='/Blood' Component={Blood}/>
      <Route path='/Frottis' Component={Frottis}/>
      <Route path='/Vaccin' Component={Vaccin}/>
      <Route path='/Lecture' Component={Lecture}/>
      <Route path='/Alcohol' Component={Alcohol}/>
      <Route path='/Glass' Component={Glass}/>
      <Route path='/Fume' Component={Fume}/>
      <Route path='/Priority' Component={Priority}/>
      <Route path='/Report' Component={Report}/>
    </Routes>
    <BackToTopButton/>
      </>
        );
};

export default App;