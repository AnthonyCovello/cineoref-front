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
  const dispatch = useDispatch();
  const { ref_id } = useParams();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);
  const [refData, setRefData] = useState({});

  changeTabTitle('Citation');

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
      className="refContainer w-2/4 py-12 px-40 mx-auto rounded-md cursor-context-menu tablet:w-4/5 tablet:px-20 phone:w-11/12 phone:py-4 phone:px-4"
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
    >
      <Link className="refContainer-returnButton inline-block text-porange text-[2rem] mr-auto h-[2.3rem] rounded phone:text-[1.5rem] phone:h-[1.9rem]" to="/" title="Retourner à la page d'accueil">
        <BsFillArrowLeftSquareFill />
      </Link>
      <div className="max-w-[80%] phone:max-w-[90%]">
        {/* // Todo: tester une image pour régler le style */}
        <img
          src=""
          alt=""
        />
      </div>
      <h2 className="refContainer-title mt-4 phone:mt-2">Titre de l'œuvre</h2>
      <Link to={`/list/listcategory/movie/${refData.show_id}/refs`} className="refContainer-data">{refData.title}</Link>
      <h2 className="refContainer-title">Média</h2>
      <p className="refContainer-data">{toFrench(refData.category)}</p>
      <h2 className="refContainer-title">Personnage</h2>
      <Link to={`/list/listcharacter/character/${refData.character_id}/refs`} className="refContainer-data">{refData.character}</Link>
      <h2 className="refContainer-title">Artiste</h2>
      <Link to={`/list/listartist/artist/${refData.artist_id}/refs`} className="refContainer-data">{refData.artist}</Link>
      <h2 className="refContainer-title">Citation</h2>
      <p className="refContainer-data data-ref text-lg">{refData.ref}</p>
      <Tippy content="Copié !" visible={isVisible}>
        <span className="block w-fit mb-8 mx-auto" onClick={handleClick}>
          <FaClosedCaptioning className="copy-btn inline text-porange text-[1.3rem] cursor-pointer" data-clipboard-target=".data-ref" title="Copier le texte" />
        </span>
      </Tippy>
      <div className="flex justify-evenly text-center">
        <div>
          <h2 className="refContainer-title">Partagée par</h2>
          {refData.user
            ? <Link to={`/user/${refData.user_id}/profile`} className="refContainer-data truncate">{refData.user}</Link>
            : 'Anonyme'}
        </div>
        <div>
          <h2 className="refContainer-title">Note de la citation</h2>
          {/* // Todo: importer la note moyenne  */}
          <p className="refContainer-data">4.6 / 5</p>
        </div>
      </div>
      {/* // Todo: faire un système pour signaler une erreur */}
      <a className="block text-center p-2 font-bold phone:text-[0.8rem]">Signaler une erreur</a>
    </div>
  );
}

export default React.memo(RefPage);
