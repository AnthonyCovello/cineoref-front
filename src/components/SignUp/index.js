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
    <form className="signUp-form" action="" method="post">
      <a className="signUp-form-returnButton" href="/" title="Retourner à la page d'accueil">
        <BsFillArrowLeftSquareFill />
      </a>
      <h1 className="signUp-form-title">Créer un compte</h1>
      <p className="signUp-form-instructions">Le pseudo doit être unique et sera visible des autres utilisateur.</p>
      <label className="signUp-form-label" htmlFor="pseudo">
        Pseudo
      </label>
      <input type="text" id="pseudo" data-required="true" required />
      <label className="signUp-form-label" htmlFor="email">
        Adresse mail
      </label>
      <input type="email" id="email" required />
      <label className="signUp-form-label" htmlFor="password">
        Mot de passe
      </label>
      <input type="password" id="password" required />
      <label className="signUp-form-label" htmlFor="confirm_password">
        Confirmer le mot de passe
      </label>
      <input type="password" id="confirm_password" required />
      <label className="signUp-form-label" htmlFor="birthday">
        Date de naissance
      </label>
      <input type="date" id="birthday" required />
      <p className="signUp-form-cgu">
        En cliquant sur <strong>S'inscrire</strong>, vous confirmez avoir lu et accepté les <a href="/cgu">Conditions d'utilisation</a>.
      </p>
      <button className="signUp-form-button" type="submit">Valider</button>
    </form>
  );
}

export default React.memo(SignUp);
