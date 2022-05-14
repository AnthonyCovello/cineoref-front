/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useState } from 'react';

// ? Import style
import './styles.scss';

const image = 'https://imgsrc.cineserie.com/2019/10/deadpool-quand-ryan-reynolds-rend-fou-son-equipe-de-maquillage.jpg?ver=1';

// ? Composant
function Profile() {
  const [isDisable, setisDisable] = useState(true);
  const enable = !isDisable ? 'enable' : '';

  const modifyForm = () => {
    setisDisable(!isDisable);
  };
  // Todo: mettre en place Formik + executer modifyForm au submit

  return (
    <div className="profile mx-auto mt-20 p-12 flex flex-wrap justify-around rounded-3xl">
      <section className="flex flex-col items-center w-2/5 container text-center">
        <img className="avatar h-60 w-60 my-6 rounded-full" src={image} alt="Photo de profil" />
        <p className="profile-bar">Anti-héro</p>
        <p className="mt-1.5 text-sm">Grade suivant dans : 10 contributions</p>
        <p className="profile-bar">
          150 contributions
        </p>
        <p className="profile-bar">
          Inscris le : 10/05/2022
        </p>
      </section>
      <form className="profile-form container w-2/5 py-8 px-12 rounded" action="" method="POST">
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="pseudo">Pseudo</label>
          <input className={enable} type="text" name="pseudo" placeholder="Deadpool" disabled={isDisable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="email">Adresse mail</label>
          <input className={enable} type="email" name="email" placeholder="imthepool@marvel.io" disabled={isDisable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="password">Mot de passe</label>
          <input className={enable} type="password" name="password" placeholder="********" disabled={isDisable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="birthday">Date de naissance</label>
          <input className={enable} type="text" name="birthday" placeholder="03/04/1990" disabled={isDisable} />
        </div>
        <div className="flex justify-around">
          <button type="button" onClick={modifyForm}>Modifier</button>
          <button type="submit">Sauvegarder</button>
        </div>
      </form>
      <section className="profile-contributions container mt-6 py-4 px-8">
        <h2 className="profile-contributions-title p-2 font-bold text-2xl text-center">Mes contributions</h2>
        {/* //Todo: mapper les contributions d'un user */}
        <div className="profile-contributions-item mt-4 p-6 leading-6">
          <p><span>Titre de l'oeuvre : </span>6 Underground</p>
          <p><span>Média : </span>Film</p>
          <p><span>Personnage : </span>Numéro 1</p>
          <p><span>Artiste : </span>Ryan Reynolds</p>
          <p><span>Partagé le : </span>02/05/2022</p>
          <p><span>Citation : </span>Vous pouvez reculer? Je sens le bout de votre membre.</p>
        </div>
        <div className="profile-contributions-item mt-4 p-6 leading-6">
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
