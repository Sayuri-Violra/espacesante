import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Salt from './Salt.js';
import './Activer.css';

const Food = () => {
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
      <a href="/ActPh" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="40" max="100" ></progress>
      <h2 className="JeSuis">Je mange du fast-food ou des plats tout prêts</h2>
      <div className="options-container">
        <div className="option" onClick={() => handleOptionClick('Jamais')}>
          <div className={`circle ${selectedOption === 'Jamais' ? 'selected' : ''}`}></div>
          <span>Jamais</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('Rarement')}>
          <div className={`circle ${selectedOption === 'Rarement' ? 'selected' : ''}`}></div>
          <span>Rarement</span>
        </div>
        <div className="option" onClick={() => handleOptionClick('Souvent')}>
          <div className={`circle ${selectedOption === 'Souvent' ? 'selected' : ''}`}></div>
          <span>Souvent</span>
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
          <Link className="Repair" to="/Salt">
            Suivant
          </Link>
        </button>
      )}
    </div>
  );
};

export default Food;
