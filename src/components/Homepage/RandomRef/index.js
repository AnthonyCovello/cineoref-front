import React from 'react';
import randomDice from '../../../assets/randomDice.png';

// ? Import style
import './styles.scss';

function RandomRef() {
  return (
    <div className="randomRef">
      <span className="randomRef-dice">
        <img src={randomDice} alt="dé de 20" />
      </span>
      <p className="randomRef-text">
        Moi je passe pas mal de temps à la taverne.
        J’ai jamais entendu parlé de celui-là!
        Mais attendez… Y a une table et des sièges
        et j’devrais m’farcir toutes les notes à ratifier debout?
        Déjà à la corne, ils regardent même pas vers ici!
        Vous pouvez bien agiter tout les drapeaux que vous voudrez!
      </p>
      <span className="randomRef-author">Arthur Pendragon</span>
      <span className="randomRef-cc">cc</span>
    </div>
  );
}

export default React.memo(RandomRef);
