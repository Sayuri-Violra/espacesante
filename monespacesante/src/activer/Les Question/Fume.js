import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Priority from './Priorité.js';
import Glass from './Glass.js'
import './Activer.css';

const Fume = () => {
  const [numDays, setNumDays] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [otherButton, setOtherButton] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setNumDays(value);
  };

  const isValidInput = () => {
    const regex = /^\d*$/;
    return regex.test(numDays) && parseInt(numDays) >= 0 && parseInt(numDays) <= 99;
  };

  const button = (
    <div className="Luffy1">
      <button
        className="Continuer"
        style={{
          display: isValidInput() || selectedOption === 'femme' ? 'block' : 'none',
        }}
      >
        <Link className="Repair" to="/Priority">
          Suivant
        </Link>
      </button>
    </div>
  );

  const message = (
    <p className="Condition1">
      Seule les valeurs numériques entières entre 0 et 99 sont acceptées
    </p>
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setNumDays(''); // Clear the input if the user clicks on an option
    setOtherButton(null); // Reset the button
  };

  return (
    <div>
      <a href="/Glass" className="Retour">
        <img src={Arrow} className="Arrow" /> &nbsp;
        Etape précédente
      </a>
      <progress className="Bar" id="loading-bar" value="96" max="100" ></progress>
      <h2 className="JeSuis">Je fume</h2>
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

      {(selectedOption === 'homme' || selectedOption === 'femme') && (
        <>
          {selectedOption === 'homme' && (
            <>
              <label htmlFor="numDaysInput" className="Smoke">
                Nombre de cigarettes que je fume par jour:
              </label>
              <br />
              <input
                type="text"
                id="numDaysInput"
                value={numDays}
                onChange={handleChange}
                pattern="^\d*$"
                title="Seules les valeurs numériques entières sont acceptées."
                required
                className="WriteInHere1"
              />
              {!isValidInput() && message}
            </>
          )}

          {button}
        </>
      )}

      <a href="http://localhost:3000/Activer">
        <button className="Plus_Tard">
          <Link className="Repairing" to="http://localhost:3000/Activer">
            Continuer plus tard
          </Link>
        </button>
      </a>
    </div>
  );
};

export default Fume;
