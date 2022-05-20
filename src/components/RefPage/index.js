/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClipboardJS from 'clipboard';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { FaClosedCaptioning } from 'react-icons/fa';
import { changeTabTitle, toFrench } from '../../utlis';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import style
import './styles.scss';
import 'tippy.js/dist/tippy.css';

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

  //* config module pour copier le texte
  const clipboard = new ClipboardJS('.copy-btn');
  clipboard.on('success', (e) => {
    e.clearSelection();
  });

  //* tooltip
  const [isVisible, setIsVisible] = useState(null);
  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  useEffect(() => {
    axios.get(`https://cinoref-api.herokuapp.com/ref/${ref_id}`)
      .then((res) => {
        setRefData(res.data[0]);
      });
    clipboard.destroy();
  }, [ref_id]);

  return (
    <div
      className="refContainer cursor-context-menu"
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
      <Link to={`/listcategory/movie/${refData.show_id}/refs`} className="refContainer-data">{refData.title}</Link>
      <h2 className="refContainer-category">Média</h2>
      <p className="refContainer-data">{toFrench(refData.category)}</p>
      <h2 className="refContainer-character">Personnage</h2>
      <Link to={`/listcharacter/character/${refData.character_id}/refs`} className="refContainer-data">{refData.character}</Link>
      <h2 className="refContainer-artist">Artiste</h2>
      <Link to={`/listartist/artist/${refData.artist_id}/refs`} className="refContainer-data">{refData.artist}</Link>
      <h2 className="refContainer-ref">Citation</h2>
      <p className="refContainer-data data-ref text-lg">{refData.ref}</p>
      <Tippy content="Copié !" visible={isVisible}>
        <span className="ml-1/2 mr-1/2 cursor-pointer" onClick={handleClick}>
          <FaClosedCaptioning className="copy-btn inline text-porange text-[1.3rem]" data-clipboard-target=".data-ref" title="Copier le texte" />
        </span>
      </Tippy>
      <div className="user-score text-center">
        <div>
          <h2 className="refContainer-user">Partagée par</h2>
          {refData.user
            ? <Link to={`/user/${refData.user_id}/profile`} className="refContainer-data">{refData.user}</Link>
            : 'Anonyme'}
        </div>
        <div>
          <h2 className="refContainer-score">Note de la communauté</h2>
          {/* // Todo: importer la note moyenne  */}
          <p className="refContainer-data">{ }</p>
        </div>
      </div>
      {/* // Todo: faire un système pour signaler une erreur */}
      <a className="signal">Signaler une erreur</a>
    </div>
  );
}

export default React.memo(RefPage);
