import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Fume from './Fume.js';
import './Activer.css';

const Priority = () => {
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

  // Check if any option is selected
  const isOptionSelected = selectedOption !== null;

  return (
    <div>
      <a href="/Fume" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="100" max="100" ></progress>
      <h2 className="JeSuis">Je veux en priorité</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('form')}>
          <div className={`circle ${selectedOption === 'form' ? 'selected' : ''}`}></div>
          <span>être plus en forme</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('moral')}>
          <div className={`circle ${selectedOption === 'moral' ? 'selected' : ''}`}></div>
          <span>avoir un meilleur moral</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('zen')}>
          <div className={`circle ${selectedOption === 'zen' ? 'selected' : ''}`}></div>
          <span>être plus zen</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('addiction')}>
          <div className={`circle ${selectedOption === 'addiction' ? 'selected' : ''}`}></div>
          <span>me libérer des addictions</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('stamina')}>
          <div className={`circle ${selectedOption === 'stamina' ? 'selected' : ''}`}></div>
          <span>être plus résistant(e) aux maladies</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('saint')}>
          <div className={`circle ${selectedOption === 'saint' ? 'selected' : ''}`}></div>
          <span>rendre mon logement plus sain</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('life')}>
          <div className={`circle ${selectedOption === 'life' ? 'selected' : ''}`}></div>
          <span>vivre plus longtemps en bonne santé</span>
        </div>
      </div>

      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard">
          <Link className="Repairing" to="http://localhost:3000/Activer">
            Continuer plus tard
          </Link>
        </button>
      </a>
      {/* Conditionally show/hide the 'Suivant' button */}
      {isOptionSelected && (
        <button className="Continuer">
          <Link className="Repair" to="/Report">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default Priority;
