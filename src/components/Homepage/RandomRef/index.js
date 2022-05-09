// ? Import modules
import React, { useState } from 'react';
import randomDice from '../../../assets/randomDice.png';
import findRandomRef from '../../../utlis';

// ? Import style
import './styles.scss';

// ? Composant
function RandomRef() {
  const [randomRef, setRandomRef] = useState(findRandomRef());
  const getNewRandomRef = () => {
    setRandomRef(findRandomRef());
  };

  return (
    <div className="randomRef">
      <span type="button" className="randomRef-dice">
        <img src={randomDice} alt="dé à 20 faces" onClick={getNewRandomRef} />
      </span>
      <p className="randomRef-text">{randomRef.ref}</p>
      <span className="randomRef-author">{randomRef.character}</span>
      <span className="randomRef-cc">cc</span>
    </div>
  );
}

export default React.memo(RandomRef);
