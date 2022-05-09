/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// ? Import style
import './styles.scss';
// ? Composant

function SearchBarRef() {
  return (
    <form className="searchForm">
      <label className="searchLabel" htmlFor="searchInput">
        Recherchez une citation
      </label>
      <input className="searchInput" id="searchInput" type="text" placeholder="Rechercher..." />
    </form>
  );
}

export default React.memo(SearchBarRef);
