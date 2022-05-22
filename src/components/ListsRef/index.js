// ? Import modules
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setListRef } from '../../features/listSlice';
import { setLoginDropdown } from '../../features/dropDownSlice';
import { changeTabTitle } from '../../utlis';

// ? Import style
import './styles.scss';

// ? Composant
function ListsRef() {
  const dispatch = useDispatch();
  const { listTheme, category, id } = useParams();
  const refList = useSelector(({ list }) => list.refList);
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);

  changeTabTitle('Citation');

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

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
    <div
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
      className="listRef w-4/5 mx-auto py-8 px-12 rounded-md h-fit tablet:w-4/5 tablet:py-6 tablet:px-8 phone:w-11/12 phone:py-4 phone:px-2"
    >
      <ul>
        {refList.map((item) => (
          <li key={item.id} className="listRef-li max-h-64 p-4 mb-4 leading-6 rounded phone:mb-3 phone:">
            <Link className="listRef-li-item" to={`/ref/${item.id}`}>
              <p className="phone:text-[0.8rem]"><span className="text-[1.125rem] font-bold text-porange phone:text-[0.9rem]">Personnage : </span>{item.character}</p>
              <p className="listRef-li-item-ref phone:text-[0.8rem]"><span className="text-[1.125rem] font-bold text-porange phone:text-[0.9rem]">Citation : </span>{item.ref}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ListsRef);
