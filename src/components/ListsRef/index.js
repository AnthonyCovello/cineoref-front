// ? Import modules
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setListRef } from '../../features/listSlice';

// ? Import style

// ? Composant
function ListsRef() {
  const { listTheme, category, id } = useParams();
  const refList = useSelector(({ list }) => list.refList);
  const dispatch = useDispatch();

  function callAPI() {
    let urlAPI;
    if (listTheme === 'listcategory') {
      urlAPI = `https://cinoref-api.herokuapp.com/listcategory/${category}/${id}/ref`;
    }
    if (listTheme === 'listartist' || listTheme === 'listcharacter') {
      urlAPI = `https://cinoref-api.herokuapp.com/${listTheme}/${id}/ref`;
    }
    return urlAPI;
  }

  useEffect(() => {
    axios.get(callAPI())
      .then((res) => {
        dispatch(setListRef(res.data));
      });
  }, [listTheme, category, id]);

  return (
    <ul>
      {refList.map((item) => (
        <li key={item.id}>
          <Link to={`/ref/${item.id}`}>{item.ref}</Link>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(ListsRef);
