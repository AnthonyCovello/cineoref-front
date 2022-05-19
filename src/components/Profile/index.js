/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { changeTabTitle } from '../../utlis';
import OtherProfile from './other-profile';
import MyProfile from './my-Profile';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const { id } = useParams();
  const user = useSelector(({ auth }) => auth.user);
  const [userData, setUserData] = useState({});

  changeTabTitle(`Profil de ${userData.username}`);

  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const test = () => {
    let testing;

    if (isLoggedIn) {
      testing = (
        <div>
          {user.user_id === Number(id) ? <MyProfile /> : <OtherProfile />}
        </div>
      );
    }
    else {
      testing = (
        <div>
          <OtherProfile />
        </div>
      );
    }
    return testing;
  };

  useEffect(() => {
    axios.get(`https://cinoref-api.herokuapp.com/user/profil/${id}`)
      .then((res) => {
        setUserData(res.data.user);
      });
  }, [id]);

  return (
    <div>
      {test()}
    </div>

  );
}

export default React.memo(Profile);
