import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Travail from './Travail';
import './Activer.css';

const Mois = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      // Deselect the option if it was already selected
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const handleAdditionalOptionClick = (option) => {
    const updatedOptions = [...selectedAdditionalOptions];
    const index = updatedOptions.indexOf(option);

    if (index > -1) {
      // Remove the option if it's already selected
      updatedOptions.splice(index, 1);
    } else {
      // Add the option to the selected options
      updatedOptions.push(option);
    }

    setSelectedAdditionalOptions(updatedOptions);
  };

  return (
    <div>
      <a href="/Enfant" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="10" max="100" ></progress>
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

      {selectedOption === 'femme' && (
        <div className="additional-options">
          <div className="Ph">Ces dernier mois,</div> 
          <div
            className={`option ${selectedAdditionalOptions.includes('option1') ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick('option1')}
          >
            <div className={`circle ${selectedAdditionalOptions.includes('option1') ? 'selected' : ''}`}></div>
            <span>Je me sens stressé(e)</span>
          </div>
          <div
            className={`option ${selectedAdditionalOptions.includes('option2') ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick('option2')}
          >
            <div className={`circle ${selectedAdditionalOptions.includes('option2') ? 'selected' : ''}`}></div>
            <span>Je me sens triste</span>
          </div>
          <div
            className={`option ${selectedAdditionalOptions.includes('option3') ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick('option3')}
          >
            <div className={`circle ${selectedAdditionalOptions.includes('option3') ? 'selected' : ''}`}></div>
            <span>Je me sens seul(e)</span>
          </div>
          <div
            className={`option ${selectedAdditionalOptions.includes('option4') ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick('option4')}
          >
            <div className={`circle ${selectedAdditionalOptions.includes('option4') ? 'selected' : ''}`}></div>
            <span>J'ai l'esprit confus</span>
          </div>
          <div
            className={`option ${selectedAdditionalOptions.includes('option5') ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick('option5')}
          >
            <div className={`circle ${selectedAdditionalOptions.includes('option5') ? 'selected' : ''}`}></div>
            <span>Je me sens fatigué(e) physiquement</span>
          </div>
          <div
            className={`option ${selectedAdditionalOptions.includes('option6') ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick('option6')}
          >
            <div className={`circle ${selectedAdditionalOptions.includes('option6') ? 'selected' : ''}`}></div>
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
        <Link className="Repair" to="/Travail">
          Suivant
        </Link>
      </button>
    </div>
  );
};

export default Mois;
