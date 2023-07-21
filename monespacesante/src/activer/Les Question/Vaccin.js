import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Lecture from './Lecture.js';
import './Activer.css';

const Vaccin = () => {
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
      <a href="/Frottis" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="80" max="100" ></progress>
      <h2 className="JeSuis">Je pense que mes vaccins sont à jour</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('Oui')}>
          <div className={`circle ${selectedOption === 'Oui' ? 'selected' : ''}`}></div>
          <span>Oui</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('Non')}>
          <div className={`circle ${selectedOption === 'Non' ? 'selected' : ''}`}></div>
          <span>Non</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('IDK')}>
          <div className={`circle ${selectedOption === 'IDK' ? 'selected' : ''}`}></div>
          <span>Je ne sais pas</span>
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
          <Link className="Repair" to="/Lecture">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default Vaccin;
