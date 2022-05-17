// ? Import modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabTitle } from '../../utlis';
import { setListData } from '../../features/listSlice';

// ? Import composants
import ListTheme from './ListTheme';
import ListMenu from './ListMenu';

// ? Import style

// ? Composant
function ListsPages() {
  const listFilters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const listApi = useSelector(({ list }) => list.list);
  const { listTheme, param } = useParams();
  const dispatch = useDispatch();
  const [tabTitle, setTabTitle] = useState('');

  changeTabTitle(`Liste ${tabTitle}`);

  function callAPI() {
    let urlAPI;
    if (listTheme === 'listcategory') {
      urlAPI = `https://cinoref-api.herokuapp.com/listcategory/${param}`;
      switch (param) {
        case 'movie': setTabTitle('des films'); break;
        case 'serie': setTabTitle('des séries'); break;
        case 'anime': setTabTitle('des animés'); break;
        case 'cartoon': setTabTitle('des dessins animés'); break;
        default:
      }
    }
    if (listTheme === 'listartist' || listTheme === 'listcharacter') {
      urlAPI = `https://cinoref-api.herokuapp.com/${listTheme}`;
      switch (listTheme) {
        case 'listartist': setTabTitle('des artistes'); break;
        case 'listcharacter': setTabTitle('des personnages'); break;
        default:
      }
    }
    return urlAPI;
  }

  useEffect(() => {
    axios.get(callAPI())
      .then((res) => {
        dispatch(setListData(res.data));
      });
  }, [listTheme, param]);

  return (
    <div>
      <ListMenu listFilters={listFilters} />
      <ListTheme list={listApi} listFilters={listFilters} />
    </div>
  );
}

export default React.memo(ListsPages);
