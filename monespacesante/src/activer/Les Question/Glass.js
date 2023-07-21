import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionnaire.css';
import Arrow from './Arrow.png';
import Fume from './Fume.js';
import './Activer.css';

const Glass = () => {
  const [numDays, setNumDays] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setNumDays(value);
  };

  const isValidInput = () => {
    const regex = /^\d*$/;
    return regex.test(numDays) && parseInt(numDays) >= 0 && parseInt(numDays) <= 999;
  };

  const button = (
    <div className="Luffy1">
    <button
      className="Continuer"
      style={{
        display: isValidInput() ? 'block' : 'none',
      }}
    >
      <Link className="Repair" to="/Fume">
        Suivant
      </Link>
    </button>
    </div>
  );

  const message = (
    <p className="Condition">
      Seule les valeurs entre 0 et 999 sont acceptées entières sont acceptées
    </p>
  );

  return (
    <div>
      <div>
        <a href="/Alcohol" className="Retour">
          <img src={Arrow} className="Arrow" /> &nbsp;
          Etape précédente
        </a>
        <progress className="Bar" id="loading-bar" value="93" max="100" ></progress>
        <label htmlFor="numDaysInput" className="Drink">
            Nombre total de verres d'alcool que j'ai bus au cours de la semaine dernière:
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
          className="WriteInHere"
        />
        {!isValidInput() && message}
      </div>
      <div className="Luffy">
        {!numDays && button}
        {numDays && isValidInput() && button}
        <a href="http://localhost:3000/Activer">
          <button className="Plus_Tard">
            <Link className="Repairing" to="http://localhost:3000/Activer">
              Continuer plus tard
            </Link>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Glass;