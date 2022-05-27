/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { changeTabTitle } from '../../utlis';
import OtherProfile from './OtherProfile';
import MyProfile from './MyProfile';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const { id } = useParams();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const [userData, setUserData] = useState({});

  changeTabTitle(`Profil de ${userData.username}`);

  const test = () => {
    let testing;

    if (isLoggedIn) {
      testing = (user.user_id === Number(id)) ? <MyProfile /> : <OtherProfile />;
    }

    else {
      testing = <OtherProfile />;
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
