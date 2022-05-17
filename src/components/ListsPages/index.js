// ? Import modules
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabTitle } from '../../utlis';
import { setListData } from '../../features/listSlice';

// ? Import composants
import ListCategory from './ListCategory';
import ListMenu from './ListMenu';

// ? Import style

// ? Composant
function ListsPages() {
  const { listTheme, param } = useParams();
  const dispatch = useDispatch();

  function callAPI() {
    let urlAPI;
    if (listTheme === 'listcategory') {
      urlAPI = `https://cinoref-api.herokuapp.com/listcategory/${param}`;
    }
    if (listTheme === 'listartist' || listTheme === 'listcharacter') {
      urlAPI = `https://cinoref-api.herokuapp.com/${listTheme}`;
    }
    return urlAPI;
  }

  changeTabTitle(`Liste des ${param}s`);

  useEffect(() => {
    axios.get(callAPI())
      .then((res) => {
        dispatch(setListData(res.data));
        console.log(res);
      });
  }, [listTheme, param]);

  const listApi = useSelector(({ list }) => list.list);

  const listFilters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ];

  return (
    <div>
      <ListMenu listFilters={listFilters} />
      <ListCategory list={listApi} listFilters={listFilters} />
    </div>
  );
}

export default React.memo(ListsPages);
