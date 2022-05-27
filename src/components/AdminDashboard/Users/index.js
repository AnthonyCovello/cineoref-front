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

  const usersCallAPI = () => {
    axios.get('https://cinoref-api.herokuapp.com/admin/dashboard')
      .then((res) => {
        setUsersList(res.data.profils);
      });
  };

  useEffect(() => usersCallAPI(), []);

  return (
    <div className="users pr-4">
      <h2 className="users-title text-center text-[2rem] font-bold text-porange phone:text-[1.9rem]">Utilisateurs</h2>
      <ol className="users-list mt-4 desk:max-h-[32rem] overflow-y-auto scrollbar-hide tablet:max-h-[25rem] phone:w-11/12">
        {usersList.map((user) => (
          <li key={user.id} className="users-list-item">
            <UserCard
              user_id={user.id}
              username={user.username}
              email={user.email}
              role={user.role}
              role_id={user.role_id}
              grade={user.grade}
              grade_id={user.grade_id}
              birthday={user.birthday}
              signup={user.created_date}
              callAPI={usersCallAPI}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default React.memo(Users);
