/* eslint-disable camelcase */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { changeTabTitle, toFrench } from '../../utlis';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import style
import './styles.scss';

// ? Composant
function RefPage() {
  changeTabTitle('Citation');

  const dispatch = useDispatch();
  const { ref_id } = useParams();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);
  const [refData, setRefData] = useState({});

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

  useEffect(() => {
    axios.get(`https://cinoref-api.herokuapp.com/ref/${ref_id}`)
      .then((res) => {
        setRefData(res.data[0]);
      });
  }, []);

  return (
    <div
      className="refContainer"
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
    >
      <Link className="refContainer-returnButton" to="/" title="Retourner à la page d'accueil">
        <BsFillArrowLeftSquareFill />
      </Link>
      <div className="refContainer-image">
        {/* // Todo: tester une image pour régler le style */}
        <img
          src=""
          alt=""
        />
      </div>
      <h2 className="refContainer-mediaTitle">Titre de l'œuvre</h2>
      <p className="refContainer-data">{refData.title}</p>
      <h2 className="refContainer-category">Média</h2>
      <p className="refContainer-data">{toFrench(refData.category)}</p>
      <h2 className="refContainer-character">Personnage</h2>
      <p className="refContainer-data">{refData.character}</p>
      <h2 className="refContainer-artist">Artiste</h2>
      <p className="refContainer-data">{refData.artist}</p>
      <h2 className="refContainer-ref">Citation</h2>
      <p className="refContainer-data">{refData.ref}</p>
      <div className="user-score">
        <div>
          <h2 className="refContainer-user">Partagée par</h2>
          <Link to="#" className="refContainer-data">{refData.user}</Link>
        </div>
        <div>
          <h2 className="refContainer-score">Note de la communauté</h2>
          {/* // Todo: importer la note moyenne  */}
          <p className="refContainer-data">{ }</p>
        </div>
      </div>
      {/* // Todo: utiliser react-icons */}
      <span className="refContainer-cc" title="Copier le texte">cc</span>
      {/* // Todo: faire un système pour signaler une erreur */}
      <a className="signal">Signaler une erreur</a>
    </div>
  );
}

export default React.memo(RefPage);
