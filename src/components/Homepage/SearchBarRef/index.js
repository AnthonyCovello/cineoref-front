/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect, useState } from 'react';

// ? Import style
import './styles.scss';

// ? Composant
function SearchBarRef() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => setIsHidden(false), []);

  const toggleSearchBar = () => setIsHidden(!isHidden);

  return (
    <form className="mb-12 text-center">
      <label className="searchTitle p-8 text-porange font-bold text-3xl" htmlFor="searchInput" onClick={toggleSearchBar} hidden={isHidden}>
        Recherchez une citation
      </label>
      <input className="searchInput h-24 w-full pl-40 text-[2.5rem]" id="searchInput" type="text" placeholder="Rechercher..." onBlur={toggleSearchBar} hidden={!isHidden} />
    </form>
  );
}

export default React.memo(SearchBarRef);
