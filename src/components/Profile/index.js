/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { changeTabTitle, toFrench } from '../../utlis';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const { id } = useParams();
  const user = useSelector(({ auth }) => auth.user);
  const [userData, setUserData] = useState({});
  const [contributionData, setContribution] = useState([]);
  const [isDisable, setIsDisable] = useState(true); //* Etat des inputs
  const enable = !isDisable ? 'enable' : ''; //* ClassName des inputs

  changeTabTitle(`Profil de ${userData.username}`);

  useEffect(() => {
    axios.get(`https://cinoref-api.herokuapp.com/user/profil/${id}`)
      .then((res) => {
        setUserData(res.data.user);
        setContribution(res.data.contribution);
      });
  }, [id]);
console.log(contributionData)
  const modifyForm = () => {
    setIsDisable(!isDisable);
  };
  // Todo: mettre en place Formik + executer modifyForm au submit
  return (
    <div className="profile w-[70%] mx-auto p-12 flex flex-wrap justify-around rounded-xl">
      <section className="flex flex-col items-center w-2/5 container text-center">
        <img className="avatar h-60 w-60 my-6 rounded-full" src={userData.profile_picture} alt="Photo de profil" />
        <p className="profile-bar">{userData.role}</p>
        <p className="profile-bar">{userData.grade}</p>
        <p className="profile-bar">
          {
            contributionData.length === 0
              ? 'Pas de contribution'
              : `${contributionData.length} ${contributionData.length > 1 ? 'contributions' : 'contribution'}`
          }
        </p>
        <p className="mt-1.5 text-xs">Grade suivant dans : 10 contributions</p>
        <p className="profile-bar">
          Inscris le : {userData.creation_date}
        </p>
      </section>
      <form className="profile-form container w-2/5 py-8 px-12 rounded" action="" method="PATCH">
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="pseudo">Pseudo</label>
          <input className={enable} type="text" name="pseudo" placeholder={userData.username} disabled={isDisable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="email">Adresse mail</label>
          <input className={enable} type="email" name="email" placeholder={userData.email} disabled={isDisable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="password">Mot de passe</label>
          <input className={enable} type="password" name="password" placeholder="********" disabled={isDisable} />
        </div>
        <div className="profile-form-group">
          <label className="profile-form-group-label" htmlFor="birthday">Date de naissance</label>
          <input className={enable} type="text" name="birthday" placeholder={userData.birthday} disabled={isDisable} />
        </div>
        {user.user_id === Number(id)
          && (
            <div className="flex justify-around">
              <button type="button" onClick={modifyForm}>Modifier</button>
              <button type="submit">Sauvegarder</button>
            </div>
          )}
      </form>
      <section className="profile-contributions w-full mt-6 py-4 px-8">
        <h2 className="profile-contributions-title p-2 font-bold text-2xl text-center">Mes contributions</h2>
        <ul>
          {contributionData.map((item) => (
            <li key={item.id} className="profile-contributions-item max-h-64 mt-4 p-6 leading-6">
              <p><span>Titre de l'oeuvre : </span>{item.show}</p>
              <p><span>Média : </span>{toFrench(item.category)}</p>
              <p><span>Personnage : </span>{item.character}</p>
              <p><span>Artiste : </span>{item.artist}</p>
              <p><span>Partagé le : </span>{item.created_date}</p>
              <p className="test"><span>Citation : </span>{item.ref}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default React.memo(Profile);
