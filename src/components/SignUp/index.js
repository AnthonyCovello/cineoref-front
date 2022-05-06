/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
// ? Import modules
import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

// ? Import style
import './styles.scss';

// ? Composant
function SignUp() {
  return (
    <form className="signUp-form">
      <a className="signUp-form-returnButton" href="/" title="Retourner à la page d'accueil">
        <BsFillArrowLeftSquareFill />
      </a>
      <h1 className="signUp-form-title">Créer un compte</h1>
      <p className="signUp-form-instructions">Le pseudo doit être unique et sera visible des autres utilisateur.</p>
      <label className="signUp-form-label">
        Pseudo*
        <input type="text" placeholder="Pseudo*" />
      </label>
      <label className="signUp-form-label">
        Adresse mail*
        <input type="email" placeholder="Email*" />
      </label>
      <label className="signUp-form-label">
        Mot de passe*
        <input type="password" placeholder="Mot de passe*" />
      </label>
      <label className="signUp-form-label">
        Confirmer le mot de passe*
        <input type="password" placeholder="Confirmer le mot de passe*" />
      </label>
      <label className="signUp-form-label">
        Date de naissance*
        <input type="date" />
      </label>
      <p>
        En cliquant sur <strong>S'inscrire</strong>, vous confirmez avoir lu et accepté les <a href="/cgu">Conditions d'utilisation</a>.
      </p>
      <button className="signUp-form-button" type="submit">Valider</button>
    </form>
  );
}

export default React.memo(SignUp);
