/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { changeTabTitle, toFrench } from '../../../utlis';

// ? Import style
import './styles.scss';

// ? Composant
function OtherProfile() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [contributionData, setContribution] = useState([]);

  changeTabTitle(`Profil de ${userData.username}`);

  useEffect(() => {
    axios.get(`https://cinoref-api.herokuapp.com/user/profil/${id}`)
      .then((res) => {
        setUserData(res.data.user);
        setContribution(res.data.contribution);
      });
  }, [id]);

  return (
    <div className="profile w-[70%] mx-auto p-12 flex flex-wrap justify-around rounded-xl">
      <section className="flex flex-col items-center w-2/5 container text-center">
        <div className="profile-form-group">
          <h3 className="text-[200%] text-porange font-bold">{userData.username}</h3>
        </div>
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
      <section className="profile-contributions w-full mt-6 py-4 px-8">
        <h2 className="profile-contributions-title p-2 font-bold text-2xl text-center">Mes contributions</h2>
        <ul>
          {contributionData.map((item) => (
            <li key={item.id} className="profile-contributions-item max-h-64 mt-4 p-6 leading-6">
              <Link to={`/ref/${item.id}`}>
                <p><span>Titre de l'oeuvre : </span>{item.show}</p>
                <p><span>Média : </span>{toFrench(item.category)}</p>
                <p><span>Personnage : </span>{item.character}</p>
                <p><span>Artiste : </span>{item.artist}</p>
                <p><span>Partagé le : </span>{item.created_date}</p>
                <p className="test"><span>Citation : </span>{item.ref}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default React.memo(OtherProfile);
