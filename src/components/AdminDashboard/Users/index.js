// ? Import modules
import React from 'react';

// ? Import styles
import './styles.scss';

// ? Composant
function Users() {
  return (
    <div className="users">
      <h2 className="users-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Utilisateurs</h2>
    </div>
  );
}

export default React.memo(Users);
