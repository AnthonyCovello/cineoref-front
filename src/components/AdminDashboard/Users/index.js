// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// ? Import composants
import UserCard from './UserCard';

// ? Import styles
import './styles.scss';

// ? Composant
function Users() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios.get('https://cinoref-api.herokuapp.com/admin/dashboard')
      .then((res) => {
        setUsersList(res.data.profils);
      });
  }, []);

  return (
    <div className="users pr-4">
      <h2 className="users-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Utilisateurs</h2>
      <ol className="users-list mt-4 desk:max-h-[32rem] overflow-y-auto scrollbar-hide tablet:max-h-[25rem]">
        {usersList.map((user) => (
          <li key={user.id} className="users-list-item">
            <UserCard
              user_id={user.id}
              username={user.username}
              email={user.email}
              role={user.role}
              grade={user.grade}
              birthday={user.birthday}
              signup={user.created_date}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default React.memo(Users);
