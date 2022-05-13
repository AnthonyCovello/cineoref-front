/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { CgProfile } from 'react-icons/cg';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  return (
    <div className="profile">
      <section className="profile-infos">
        <CgProfile className="profile-infos-avatar" />
        <div className="profile-infos-grade">
          <p className="profile-infos-grade-bar">Peon</p>
          <p className="profile-infos-grade-info">Grade suivant dans : 10 contributions</p>
        </div>
        <p className="profile-infos-contributions">
          15 contributions
        </p>
        <p className="profile-infos-inscriptionDate">
          Membre depuis le : 10/05/2022
        </p>
      </section>
      <form className="profile-form" action="" method="POST">
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="pseudo">Pseudo</label>
          <input type="text" name="pseudo" disabled />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="email">Adresse mail</label>
          <input type="email" name="email" disabled />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="password">Mot de passe</label>
          <input type="password" name="password" disabled />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="birthday">Date de naissance</label>
          <input type="date" name="birthday" disabled />
        </div>
        <div className="profile-form-button">
          <button type="button">Modifier</button>
          <button type="submit">Sauvegarder</button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(Profile);
