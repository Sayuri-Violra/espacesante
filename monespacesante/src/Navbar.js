import React from 'react';
import logo from './logo.svg.png';
import { Link, Usenavigate, useNavigate, Routes, Route} from 'react-router-dom';
import './Navbar.css';
import Activer from './activer/Activer';
import Connecter from './activer/Connecter.js'
import Questionnaire from './activer/Les Question/Questionnaire.js';

const Navbar = () => {
const History = useNavigate();
<Routes>
<Route path="/Questionnaire" Component={Questionnaire}/>
</Routes>
    return (
      <div>
        <nav className="navbar">
          <a href="/">
            <img className="navbar__logo" src={logo} alt="logo"/>
            </a>
          <div className="navbar__buttons">
            <a className="navbar__button1" href="#" target="_blank">Besoin d'aide ?</a>
            <a href="http://127.0.0.1:8000/login">
              <button onClick={()=>History('/Connecter')} className="navbar__button2">Activer Mon espace santé</button>
              </a>
            <a href="http://127.0.0.1:8000/register">
           <button className="navbar__button3">Se connecter</button>
           </a>
            
          </div>
        </nav>
      </div>
    );
  };
  //onClick{()=>History('/Connecter')}
  export default Navbar;