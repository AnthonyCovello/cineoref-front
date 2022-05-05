/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// ? Import style
import './styles.scss';
// ? Composant

function SearchBarRef() {
  return (
    <form className="searchForm">
      <label className="searchLabel">
        Recherchez une citation
        <input className="searchInput" type="text" placeholder="Rechercher..." />
      </label>
    </form>
  );
}

export default React.memo(SearchBarRef);
