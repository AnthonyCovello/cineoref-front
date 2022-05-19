/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setListSearch } from '../../../features/listSlice';
// ? Import style
import './styles.scss';
// ? Composant
function SearchBarRef() {
  const [isHidden, setIsHidden] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => setIsHidden(false), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://cinoref-api.herokuapp.com/search/${value}`)
      .then((res) => {
        dispatch(setListSearch(res.data));
        navigate('/searchResult');
      });
  };

  const toggleSearchBar = () => setIsHidden(!isHidden);

  return (
    <form className="mb-12 text-center" onSubmit={handleSubmit}>
      <label className="searchTitle p-8 text-porange font-bold text-3xl" htmlFor="searchInput" onClick={toggleSearchBar} hidden={isHidden}>
        Recherchez une citation
      </label>
      <input
        className="searchInput h-24 w-full pl-40 text-[2.5rem] phone:h-16 phone:pl-28 phone:text-2xl tablet:pl-36 tablet:text-3xl"
        id="searchInput"
        type="text"
        placeholder="Rechercher..."
        onBlur={toggleSearchBar}
        hidden={!isHidden}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default React.memo(SearchBarRef);
