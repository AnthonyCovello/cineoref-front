// ? Import modules
import React from 'react';

// ? Import style
import './styles.scss';

// ? Composant
function Description() {
  return (
    <div>
      <p className="description-text w-2/5 inset-x-1/3 p-12 m-auto mt-20 font-medium text-center text-[1.5rem] text-porange rounded-3xl">
        Bienvenue sur CinéO'Ref !<br />
        Notre but est de répertorier les citations cinématographiques les plus drôles
        et permettre à tout le monde de trouver celle qu’il cherche ou de simplement
        se balader sur le site pour en découvrir de nouvelles et passer un bon moment.
      </p>
    </div>
  );
}

export default React.memo(Description);
