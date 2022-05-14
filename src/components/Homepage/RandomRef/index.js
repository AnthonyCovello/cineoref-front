// ? Import modules
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randomDice from '../../../assets/randomDice.png';
import { setRandomRefData } from '../../../features/refSlice';

// ? Import style
import './styles.scss';

// ? Composant
function RandomRef() {
  const dispatch = useDispatch();
  const randomRefData = useSelector(({ ref }) => ref.randomRef);

  const randomRefApi = () => {
    axios
      .get('https://cinoref-api.herokuapp.com/random')
      .then((res) => {
        dispatch(setRandomRefData(res.data));
      });
  };

  useEffect(() => {
    randomRefApi();
  }, []);

  const getNewRandomRef = () => {
    randomRefApi();
  };

  return (
    <div className="randomRef w-2/5 h-[17rem] rounded-3xl py-8 px-10 flex flex-col justify-between text-[1.25rem] font-medium cursor-context-menu">
      <span type="button" className="self-end cursor-pointer" onClick={getNewRandomRef}>
        <img src={randomDice} className="w-11 h-11" title="Afficher une citation aléatoire" alt="dé à 20 faces" />
      </span>
      <p className="randomRef-text">{randomRefData.ref}</p>
      <span className="ml-8 mt-6 text-[1.30rem]">{randomRefData.character}</span>
      <span className="self-end cursor-pointer text-porange" title="Copier le texte">cc</span>
    </div>
  );
}

export default React.memo(RandomRef);
