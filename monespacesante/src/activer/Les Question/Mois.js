import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import enfant from './Enfant.js';
import './Activer.css';

const Mois = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [selectedAdditionalOption, setSelectedAdditionalOption] = useState(null);

  const handleOptionClick = (option) => {
    if (showAdditionalOptions) {
      setSelectedAdditionalOption(option);
    } else {
      setSelectedOption(option);
      setShowAdditionalOptions(option === 'femme');
    }
  };

  return (
    <div>
      <a href="http://localhost:3000/Activer" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Retour
      </a>
      <h2 className="JeSuis">Ces derniers mois, je me sens bien:</h2>
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

      {showAdditionalOptions && (
        <div className="additional-options">
          <div
            className={`option ${selectedAdditionalOption === 'option1' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option1')}
          >
            <div className={`circle ${selectedAdditionalOption === 'option1' ? 'selected' : ''}`}></div>
            <span>Je me sens stressé(e)</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption === 'option2' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option2')}
          >
            <div className={`circle ${selectedAdditionalOption === 'option2' ? 'selected' : ''}`}></div>
            <span>Je me sens triste</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption === 'option3' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option3')}
          >
            <div className={`circle ${selectedAdditionalOption === 'option3' ? 'selected' : ''}`}></div>
            <span>Je me sens seul(e)</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption === 'option4' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option4')}
          >
            <div className={`circle ${selectedAdditionalOption === 'option4' ? 'selected' : ''}`}></div>
            <span>J'ai l'esprit confus</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption === 'option5' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option5')}
          >
            <div className={`circle ${selectedAdditionalOption === 'option5' ? 'selected' : ''}`}></div>
            <span>Je me sens fatigué(e) physiquement</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption === 'option6' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option6')}
          >
            <div className={`circle ${selectedAdditionalOption === 'option6' ? 'selected' : ''}`}></div>
            <span>Je récupère lentement</span>
          </div>
        </div>
      )}

      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard">
          <Link className="Repairing" to="http://localhost:3000/Activer">
            Continuer plus tard
          </Link>
        </button>
      </a>
      <button className="Continuer">
        <Link className="Repair" to="/Enfant">
          Suivant
        </Link>
      </button>
    </div>
  );
};

export default Mois;
