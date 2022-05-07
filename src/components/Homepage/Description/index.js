import React from 'react';
// ? Import style
import './styles.scss';
// ? Composant

function Description() {
  return (
    <div className="description">
      <p className="description-text">
        Bienvenue sur CinéO'Ref !<br />
        Notre but est de répertorier les citations cinématographiques les plus drôles
        et permettre à tout le monde de trouver celle qu’il cherche ou de simplement
        se balader sur le site pour en découvrir de nouvelles et passer un bon moment.
      </p>
    </div>
  );
}

export default React.memo(Description);
