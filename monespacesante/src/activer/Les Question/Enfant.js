import {React, useState} from 'react';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Mois from './Mois.js';
import {Link, Routes, Route} from 'react-router-dom';
import './Activer.css';

const Questionnaire = () => {
    const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  return (
    <div>
      <a href="http://localhost:3000/Activer" className="Retour">
        <img src={Arrow} className="Arrow"/> &nbsp;
        Retour
        </a>
      <h2 className="JeSuis">J'ai un ou des enfants</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('homme')}>
          <div className={`circle ${selectedOption === 'homme' ? 'selected' : ''}`}></div>
          <span>Oui</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('femme')}>
          <div className={`circle ${selectedOption === 'femme' ? 'selected' : ''}`}></div>
          <span>Non</span>
        </div>
      </div>
      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard"><Link className="Repairing" to="http://localhost:3000/Activer">Continuer plus tard</Link></button>
        </a>
      <button className="Continuer"><Link className="Repair" to="/Mois">Suivant</Link></button>
    </div>
  );
};
export default Questionnaire;