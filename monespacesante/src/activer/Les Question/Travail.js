import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Dors from './Dors.js';
import './Activer.css';

const Travail = () => {
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

  return (
    <div>
      <a href="/Mois" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="15" max="100" ></progress>
      <h2 className="JeSuis">Je travaille</h2>
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

      {selectedOption === 'homme' && (
        <div className="additional-options">
          <div className="Ph">Je pense que mon travail est dur physiquement</div>
          <div
            className={`option ${selectedAdditionalOption1 === 'option1' ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick1('option1')}
          >
            <div className={`circle ${selectedAdditionalOption1 === 'option1' ? 'selected' : ''}`}></div>
            <span>Non</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption1 === 'option2' ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick1('option2')}
          >
            <div className={`circle ${selectedAdditionalOption1 === 'option2' ? 'selected' : ''}`}></div>
            <span>Assez dur</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption1 === 'option3' ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick1('option3')}
          >
            <div className={`circle ${selectedAdditionalOption1 === 'option3' ? 'selected' : ''}`}></div>
            <span>Très dur</span>
          </div>

          <div className="Ph">Je pense que mon travail est dur mentalement</div>
          <div
            className={`option ${selectedAdditionalOption2 === 'option1' ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick2('option1')}
          >
            <div className={`circle ${selectedAdditionalOption2 === 'option1' ? 'selected' : ''}`}></div>
            <span>Non</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption2 === 'option2' ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick2('option2')}
          >
            <div className={`circle ${selectedAdditionalOption2 === 'option2' ? 'selected' : ''}`}></div>
            <span>Assez dur</span>
          </div>
          <div
            className={`option ${selectedAdditionalOption2 === 'option3' ? 'selected' : ''}`}
            onClick={() => handleAdditionalOptionClick2('option3')}
          >
            <div className={`circle ${selectedAdditionalOption2 === 'option3' ? 'selected' : ''}`}></div>
            <span>Très dur</span>
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
        <Link className="Repair" to="/Dors">
          Suivant
        </Link>
      </button>
    </div>
  );
};

export default Travail;