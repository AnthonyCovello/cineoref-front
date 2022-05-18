// ? Import modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabTitle } from '../../utlis';
import { setListCategory } from '../../features/listSlice';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import composants
import ListTheme from './ListTheme';
import ListMenu from './ListMenu';

// ? Import style
import './styles.scss';

// ? Composant
function ListsPages() {
  const listFilters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const dispatch = useDispatch();
  const { listTheme, param } = useParams();
  const [tabTitle, setTabTitle] = useState('');
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);
  const listApi = useSelector(({ list }) => list.categoryList);

  changeTabTitle(`Liste ${tabTitle}`);

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

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
        dispatch(setListCategory(res.data));
      });
  }, [listTheme, param]);

  return (
    <div
      className="listPages w-4/5 mx-auto p-12 rounded-xl"
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
    >
      <ListMenu listFilters={listFilters} />
      <ListTheme list={listApi} listFilters={listFilters} listTheme={listTheme} />
    </div>
  );
}

export default React.memo(ListsPages);
