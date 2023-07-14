import React, { useState } from 'react';
import './Activer.css'

function LoginForm() {
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    console.log('Identifiant:', identifiant);
    console.log('Mot de passe:', motDePasse);

    // Clear form inputs
    setIdentifiant('');
    setMotDePasse('');
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
        <div className="Id">
            <label htmlFor="identifiant">Mon identifiant</label><br/>
            <input className="Input"
                type="text"
                id="identifiant"
                name="identifiant"
                value={identifiant}
                onChange={(e) => setIdentifiant(e.target.value)}
                required
            />
            <p><a href="#" className="Link">Identifiant oublié?</a></p>
        </div>
        <div className="PassWord">
            <label htmlFor="motdepasse">Mon mot de passe</label><br/>
            <input className="Input"
                type="password"
                id="motdepasse"
                name="motdepasse"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
            />
            <p><a href="#" className="Link">Mot de passe oublié?</a></p>
        </div><br/>

      <input className="Submit" type="submit" value="Continuer" />
    </form>
  );
}

export default LoginForm;
