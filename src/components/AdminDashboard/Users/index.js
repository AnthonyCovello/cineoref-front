// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// ? Import styles
import './styles.scss';

// ? Composant
function Users() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios.get('https://cinoref-api.herokuapp.com/admin/dashboard')
      .then((res) => {
        console.log(res);
        setUsersList(res.data.profils);
      });
  }, []);
  console.log('liste - ', usersList);
  return (
    <div className="users bg-[#c6c6c6] h-fit">
      <h2 className="users-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Utilisateurs</h2>
      <ol className="users-list">
        <li className="users-list-item">utilisateur 1</li>
        <li className="users-list-item">utilisateur 2</li>
        <li className="users-list-item">utilisateur 3</li>
      </ol>
    </div>
  );
}

export default React.memo(Users);
