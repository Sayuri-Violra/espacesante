import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Doc from './Doc.js';
import './Activer.css';

const Fat = () => {
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
      <a href="/Salt" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="50" max="100" ></progress>
      <h2 className="JeSuis">Je pense avoir des kilos en trop</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('Oui')}>
          <div className={`circle ${selectedOption === 'Oui' ? 'selected' : ''}`}></div>
          <span>Oui</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('Non')}>
          <div className={`circle ${selectedOption === 'Non' ? 'selected' : ''}`}></div>
          <span>Non</span>
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
          <Link className="Repair" to="/Doc">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default Fat;
