import React from 'react';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  return (
    <div className="profile">Profils</div>
  );
}

export default React.memo(Profile);
