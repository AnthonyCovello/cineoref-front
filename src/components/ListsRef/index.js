// ? Import modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setListData } from '../../features/listSlice';

// ? Import composants

// ? Import style

// ? Composant
function ListsRef() {
  const { listTheme, param, id } = useParams();
  const dispatch = useDispatch();

  function callAPI() {
    let urlAPI;
    if (listTheme === 'listcategory') {
      urlAPI = `https://cinoref-api.herokuapp.com/listcategory/${param}/${id}/ref`;
    }
    if (listTheme === 'listartist' || listTheme === 'listcharacter') {
      urlAPI = `https://cinoref-api.herokuapp.com/${listTheme}/${id}/ref`;
    }
    return urlAPI;
  }

  useEffect(() => {
    axios.get(callAPI())
      .then((res) => {
        dispatch(setListData(res.data));
      });
  }, [listTheme, param, id]);

  return (
    <ul>
      <li>

      </li>
    </ul>
  );
}

export default React.memo(ListsRef);
