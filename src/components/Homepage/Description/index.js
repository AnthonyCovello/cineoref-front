import React from 'react';
// ? Import style
import './styles.scss';
// ? Composant

function Description() {
  return (
    <div className="description">
      <p className="description-text">
        Moi je passe pas mal de temps à la taverne.
        J’ai jamais entendu parlé de celui-là!
        Mais attendez… Y a une table et des sièges
        et j’devrais m’farcir toutes les notes à ratifier debout?
        Déjà à la corne, ils regardent même pas vers ici!
        Vous pouvez bien agiter tout les drapeaux que vous voudrez!
      </p>
    </div>
  );
}

export default React.memo(Description);
