import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Food from './Food.js';
import './Activer.css';

const ActPh = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAdditionalOption1, setSelectedAdditionalOption1] = useState(null);
  const [selectedAdditionalOption2, setSelectedAdditionalOption2] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedAdditionalOption1(null); // Deselect any additional option when the main option changes
    setSelectedAdditionalOption2(null); // Deselect any additional option when the main option changes
  };

  const handleAdditionalOptionClick1 = (option) => {
    setSelectedAdditionalOption1(option);
  };

  const handleAdditionalOptionClick2 = (option) => {
    setSelectedAdditionalOption2(option);
  };

  const isSuivantVisible = selectedOption !== null;

  return (
    <div>
      <a href="/Sittin" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="35" max="100" ></progress>
      <h2 className="JeSuis">Je pratique au moins 30 minutes d'activités physiques dynamiques par jour (jogging, marche, vélo, kardinage, ménage...)</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('Jamais')}>
          <div className={`circle ${selectedOption === 'Jamais' ? 'selected' : ''}`}></div>
          <span>Jamais</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('1-2')}>
          <div className={`circle ${selectedOption === '1-2' ? 'selected' : ''}`}></div>
          <span>1 à 2 fois par semaine</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('3-4')}>
          <div className={`circle ${selectedOption === '3-4' ? 'selected' : ''}`}></div>
          <span>3 à 4 fois par semaine</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('5-7')}>
          <div className={`circle ${selectedOption === '5-7' ? 'selected' : ''}`}></div>
          <span>5 à 7 fois par semaine</span>
        </div>
      </div>

      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard">
          <Link className="Repairing" to="http://localhost:3000/Activer">
            Continuer plus tard
          </Link>
        </button>
      </a>

      {isSuivantVisible && ( // Show "Suivant" button only if an option is selected
        <button className="Continuer">
          <Link className="Repair" to="/Food">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default ActPh;
