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
    <div className="otherProfile w-[70%] mx-auto p-12 flex flex-col items-center rounded-md cursor-context-menu tablet:w-11/12 phone:pt-0 phone:pb-6 phone:px-4">
      <h3 className="text-[2rem] text-porange font-bold phone:mt-4 phone:text-[1.5rem]">{userData.username}</h3>
      <section className="flex flex-col items-center w-2/5 container text-center font-bold phone:w-4/5 phone:text-[0.9rem]">
        <img className="avatar h-60 w-60 my-6 rounded-full phone:h-44 phone:w-44" src={userData.profile_picture} alt="Photo de profil" />
        <p className="otherProfile-bar">{userData.role}</p>
        <p className="otherProfile-bar">{userData.grade}</p>
        <p className="otherProfile-bar">
          {
            contributionData.length === 0
              ? 'Pas de contribution'
              : `${contributionData.length} ${contributionData.length > 1 ? 'contributions' : 'contribution'}`
          }
        </p>
        {(userData.role !== 'Fondateur' && userData.role !== 'Admin')
          && (<p className="mt-1.5 text-xs">Grade suivant dans : 10 contributions</p>)}
        <p className="otherProfile-bar">
          Inscrit le : {userData.creation_date}
        </p>
      </section>
      <section className="otherProfile-contributions w-full mt-6 py-4 px-8 phone:px-4">
        <h2 className="otherProfile-contributions-title p-2 font-bold text-[1.5rem] text-center phone:px-1">Mes contributions</h2>
        <ul>
          {contributionData.map((item) => (
            <li key={item.id} className="otherProfile-contributions-item max-h-64 mt-4 p-6 leading-6 rounded tablet:max-h-min">
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
    </div>
  );
}

export default React.memo(OtherProfile);
