// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randomDice from '../../../assets/randomDice.png';
import findRandomRef from '../../../utlis';
import { setRandomRefData } from '../../../features/randomRefSlice';

// ? Import style
import './styles.scss';

// ? Composant
function RandomRef() {
  const dispach = useDispatch();
  const randomRefApi = () => {
    axios
      .get('https://cinoref-api.herokuapp.com/random')
      .then((res) => {
        dispach(setRandomRefData(res.data));
      });
  };
  const getNewRandomRef = () => {
    randomRefApi();
  };
  useEffect(() => {
    randomRefApi();
  }, []);

  const randomRefData = useSelector(({ randomRef }) => randomRef.randomRef);

  return (
    <div className="randomRef">
      <span type="button" className="randomRef-dice" onClick={getNewRandomRef}>
        <img src={randomDice} title="Afficher une citation aléatoire" alt="dé à 20 faces" />
      </span>
      <p className="randomRef-text ">{randomRefData.ref}</p>
      <span className="randomRef-author">{randomRefData.character}</span>
      <span className="randomRef-cc" title="Copier le texte">cc</span>
    </div>
  );
}

export default React.memo(RandomRef);
