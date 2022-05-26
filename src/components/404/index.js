// ? Import modules
import React, { useEffect } from 'react';
import initGame from './game/game';

// ? Import composants

// ? Import style
import './styles.scss';

// ? Composant
function Page404() {
  useEffect(() => {
    initGame();
  }, []);
  return (
    <div className="page404 flex flex-col items-center w-4/5 mx-auto py-6 px-12 rounded-md cursor-context-menu tablet:w-11/12 tablet:px-8 phone:py-2 phone:px-1">
      <h1 className="page404-Title text-[1.7rem] font-bold text-center tablet:text-[1.2rem]">
        Erreur 4<span className="page404-Title-Span">0</span>4 - Les aliens ont enlevé cette page! Vengez-nous!
      </h1>
      <h2 className="invadersResults my-6 text-[1.7rem] font-bold text-center tablet:text-[1.2rem]">0</h2>
      <div className="invadersGrid" />
      <p className="text-center mt-6 font-bold">Utilisez les flèches du clavier pour vous déplacer et la flèche du haut pour tirer</p>
    </div>
  );
}

export default React.memo(Page404);
