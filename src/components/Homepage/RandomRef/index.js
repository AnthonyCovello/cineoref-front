/* eslint-disable import/no-extraneous-dependencies */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaClosedCaptioning } from 'react-icons/fa';
import ClipboardJS from 'clipboard';
import Tippy from '@tippyjs/react';
import { setRandomRefData } from '../../../features/refSlice';

// ? Import style
import './styles.scss';
import 'tippy.js/dist/tippy.css';
import randomDice from '../../../assets/randomDice.png';

// ? Composant
function RandomRef() {
  const dispatch = useDispatch();
  const randomRefData = useSelector(({ ref }) => ref.randomRef);

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

  const randomRefApi = () => {
    axios
      .get('https://cinoref-api.herokuapp.com/random')
      .then((res) => {
        dispatch(setRandomRefData(res.data));
      });
  };

  useEffect(() => {
    randomRefApi();
    clipboard.destroy();
  }, []);

  return (
    <div className="randomRef w-2/5 h-[17rem] rounded-md py-8 px-10 flex flex-col justify-between text-[1.25rem] font-medium cursor-context-menu tablet:w-4/5 phone:text-[1.2rem]">
      <span type="button" className="self-end cursor-pointer" onClick={randomRefApi}>
        <img src={randomDice} className="w-11 h-11" title="Afficher une citation aléatoire" alt="dé à 20 faces" />
      </span>
      <Link className="randomRef-text mb-6" to={`/ref/${randomRefData.id}`}>
        {randomRefData.ref}
      </Link>
      <Link className="ml-8 mr-auto text-[1.30rem] phone:text-[1rem] phone:ml-0 phone:mr-0 tablet:truncate tablet:w-4/5" to={`/listcharacter/character/${randomRefData.character_id}/refs`}>
        {randomRefData.character}
      </Link>
      <Tippy content="Copié !" visible={isVisible}>
        <span className="self-end cursor-pointer" onClick={handleClick}>
          <FaClosedCaptioning className="copy-btn text-porange text-[1.3rem]" data-clipboard-target=".randomRef-text" title="Copier le texte" />
        </span>
      </Tippy>
    </div>
  );
}

export default React.memo(RandomRef);
