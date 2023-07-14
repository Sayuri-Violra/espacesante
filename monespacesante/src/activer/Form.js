import React, { useState } from 'react';
import './Activer.css'
import { auth, signInWithEmailAndPassword } from 'firebase/auth';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="Form">
      <div>
        <label className="Id" htmlFor="email">Mon identifiant</label>
        <input className="Input1"
        required="true"
          type="email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Adress..."
        />
        <p className="Link1">Identifiant oublié ?</p>
      </div>
      <div>
        <label className="PassWord" htmlFor="password">Mon mot de passe</label>
        <input className="Input2"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        <p className="Link2">Mon de passe oublié ?</p>
      </div>
      <button
      className="Submit"
      type="submit"
      onClick={() => signInWithEmailAndPassword(email, password)}
      >
        Continuer</button>
    </form>
  );
}

export default LoginForm;
