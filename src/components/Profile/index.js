/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const [isEnable, setIsEnable] = useState(true);

  const modifyForm = () => {
    setIsEnable(!isEnable);
  };
  // Todo: mettre en place Formik + executer modifyForm au submit

  return (
    <div className="profile container mx-auto">
      <section className="profile-infos container">
        <CgProfile className="profile-infos-avatar" />
        <p className="profile-infos-bar">Peon</p>
        <p className="profile-infos-gradeInfo">Grade suivant dans : 10 contributions</p>
        <p className="profile-infos-bar">
          15 contributions
        </p>
        <p className="profile-infos-bar">
          Membre depuis le : 10/05/2022
        </p>
      </section>
      <form className="profile-form container" action="" method="POST">
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="pseudo">Pseudo</label>
          <input type="text" name="pseudo" placeholder="Pseudo" disabled={isEnable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="email">Adresse mail</label>
          <input type="email" name="email" placeholder="pseudo@oclock.io" disabled={isEnable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="password">Mot de passe</label>
          <input type="password" name="password" placeholder="password" disabled={isEnable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="birthday">Date de naissance</label>
          <input type="text" name="birthday" placeholder="03/04/1990" disabled={isEnable} />
        </div>
        <div className="profile-form-button">
          <button type="button" onClick={modifyForm}>Modifier</button>
          <button type="submit">Sauvegarder</button>
        </div>
      </form>
      <section className="profile-contributions container">
        <h2 className="profile-contributions-title">Mes contributions</h2>
        {/* //Todo: mapper les contributions d'un user */}
        <div className="profile-contributions-item">
          <p><span>Titre de l'oeuvre : </span>6 Underground</p>
          <p><span>Média : </span>Film</p>
          <p><span>Personnage : </span>Numéro 1</p>
          <p><span>Artiste : </span>Ryan Reynolds</p>
          <p><span>Partagé le : </span>02/05/2022</p>
          <p><span>Citation : </span>Vous pouvez reculer? Je sens le bout de votre membre.</p>
        </div>
        <div className="profile-contributions-item">
          <p><span>Titre de l'oeuvre : </span>OSS 117 : Rio ne répond plus</p>
          <p><span>Média : </span>Film</p>
          <p><span>Personnage : </span>Armand Lesignac</p>
          <p><span>Artiste : </span>Pierre Bellemare</p>
          <p><span>Partagé le : </span>15/04/2022</p>
          <p><span>Citation : </span>Pour rencontrer M. Lee, vaut mieux une bonne couverture.</p>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Profile);
