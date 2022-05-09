// ? Import modules
import React from 'react';
import randomDice from '../../../assets/randomDice.png';
import findRandomRef from '../../../utlis';

// ? Import style
import './styles.scss';

const { ref, character } = findRandomRef();
console.log('randomResult - ', ref, character);

// const getNewRandomRef = () => {
//   console.log(findRandomRef());
//   findRandomRef();
// };

// ? Composant
function RandomRef() {
  return (
    <div className="randomRef">
      <span type="button" className="randomRef-dice">
        <img src={randomDice} alt="dé à 20 faces" onClick={{/* getNewRandomRef */}} />
      </span>
      <p className="randomRef-text">{ref}</p>
      <span className="randomRef-author">{character}</span>
      <span className="randomRef-cc">cc</span>
    </div>
  );
}

export default React.memo(RandomRef);
