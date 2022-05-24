// ? Import modules
import React from 'react';

// ? Import styles
import './styles.scss';

// ? Composant
function MainDash() {
  return (
    <div className="mainDash">
      <h2 className="mainDash-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Tableau de bord</h2>
    </div>
  );
}

export default React.memo(MainDash);
