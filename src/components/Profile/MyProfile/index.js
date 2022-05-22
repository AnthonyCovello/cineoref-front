/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../features/authSlice';
import { changeTabTitle, toFrench } from '../../../utlis';

// ? Import style
import '../styles.scss';

// ? Composant
function MyProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [contributionData, setContribution] = useState([]);
  const [isDisable, setIsDisable] = useState(true); //* Etat des inputs
  const [valueEmail, setValueEmail] = useState(null);
  const [valuePassword, setValuePassword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const enable = !isDisable ? 'enable' : ''; //* ClassName des inputs

  changeTabTitle(`Profil de ${userData.username}`);

  useEffect(() => {
    axios.get(`https://cinoref-api.herokuapp.com/user/profil/${id}`)
      .then((res) => {
        setUserData(res.data.user);
        setContribution(res.data.contribution);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://cinoref-api.herokuapp.com/user/delete/${id}`)
      .then(() => {
        navigate('/');
        dispatch(logout());
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = valueEmail ? {
      email: valueEmail,
    } : {};

    const passwordValue = valuePassword ? {
      password: valuePassword,
    } : {};

    axios.patch('https://cinoref-api.herokuapp.com/user/edit', {
      ...emailValue,
      ...passwordValue,
      id: id,
    }).then((res) => {
      console.log(res);
    });
  };

  const modifyForm = () => {
    setIsDisable(!isDisable);
  };

  return (
    <div className="profile w-[70%] mx-auto p-12 flex flex-wrap justify-around rounded-md cursor-context-menu tablet:w-11/12 tablet:flex-col tablet:items-center phone:pt-0 phone:pb-6 phone:px-4">
      <section className="flex flex-col items-center w-2/5 container text-center font-bold tablet:mb-4 phone:w-4/5">
        <img className="avatar h-60 w-60 my-6 rounded-full phone:h-44 phone:w-44" src={userData.profile_picture} alt="Photo de profil" />
        <p className="profile-bar">{userData.role}</p>
        {(userData.role !== 'Fondateur' && userData.role !== 'Admin')
          && (<p className="profile-bar">{userData.grade}</p>)}
        <p className="profile-bar">
          {
            contributionData.length === 0
              ? 'Pas de contribution'
              : `${contributionData.length} ${contributionData.length > 1 ? 'contributions' : 'contribution'}`
          }
        </p>
        {(userData.role !== 'Fondateur' && userData.role !== 'Admin')
          && (<p className="mt-1.5 text-xs">Grade suivant dans : 10 contributions</p>)}
        <p className="profile-bar">
          Inscrit le : {userData.creation_date}
        </p>
      </section>
      {/* // ? Formulaire utilisateur */}
      <form
        className="profile-form w-2/5 py-8 px-12 cursor-context-menu rounded tablet:w-full phone:py-6 phone:px-8"
        action=""
        method="PATCH"
        onSubmit={handleSubmit}
      >
        <div className="profile-form-group">
          <h3 className="profile-form-group-label" htmlFor="pseudo">Pseudo</h3>
          <p className="">{userData.username}</p>
        </div>
        <div className="profile-form-group">
          <h3 className="profile-form-group-label" htmlFor="email">Adresse mail</h3>
          <input
            className={enable}
            type="email"
            name="email"
            placeholder={userData.email}
            disabled={isDisable}
            onChange={(e) => setValueEmail(e.target.value)}
          />
        </div>
        <div className="profile-form-group">
          <h3 className="profile-form-group-label" htmlFor="password">Mot de passe</h3>
          <input
            className={enable}
            type="password"
            name="password"
            placeholder="********"
            disabled={isDisable}
            onChange={(e) => setValuePassword(e.target.value)}
          />
        </div>
        <div className="profile-form-group">
          <h3 className="profile-form-group-label" htmlFor="birthday">Date de naissance</h3>
          <p>{userData.birthday}</p>
        </div>
        <div className="flex justify-around my-4">
          {isDisable
            ? <button className="py-2 px-4 rounded font-bold text-[1.2rem]" type="button" onClick={modifyForm}>Modifier</button>
            : <button className="py-2 px-4 rounded font-bold text-[1.2rem]" type="submit" onClick={modifyForm}>Sauvegarder</button>}
        </div>
        <span className="deleteBtn block p-2 mx-auto text-center text-[0.8rem] font-bold text-[#DC2626] cursor-pointer" onClick={() => setShowModal(true)}>
          Supprimer mon compte
        </span>
      </form>
      <section className="profile-contributions w-full mt-6 py-4 px-8 phone:px-4">
        <h2 className="profile-contributions-title p-2 font-bold text-[1.5rem] text-center">Mes contributions</h2>
        <ul>
          {contributionData.map((item) => (
            <li key={item.id} className="profile-contributions-item max-h-64 mt-4 p-6 leading-6 rounded tablet:max-h-min">
              <Link to={`/ref/${item.id}`}>
                <p><span>Titre de l'oeuvre : </span>{item.show}</p>
                <p><span>Média : </span>{toFrench(item.category)}</p>
                <p><span>Personnage : </span>{item.character}</p>
                <p><span>Artiste : </span>{item.artist}</p>
                <p><span>Partagé le : </span>{item.created_date}</p>
                <p className="refText"><span>Citation : </span>{item.ref}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {showModal
        ? (
          <div>
            <h3> êtes vous sur de vouloir supprimer votre compte ? </h3>
            <button type="button" onClick={handleDelete}>Oui</button>
            <button type="button" onClick={() => setShowModal(true)}>Non</button>
          </div>
        ) : null}
    </div>
  );
}

export default React.memo(MyProfile);
