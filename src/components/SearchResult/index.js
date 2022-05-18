// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';

// ? Import style

// ? Composant
function SearchResult() {
  const refs = useSelector(({ list }) => list.searchList.getRefBySearchBar);
  console.log(refs);
  return (
    <div>
      <div>
        <h3> Refs' </h3>
        {refs.map((item) => (
          <li key={item.id}> {item.ref} </li>
        ))}
      </div>
      <div>
        <p> Médias </p>
      </div>
      <div>
        <p> Artistes </p>
      </div>
      <div>
        <p> Personnages </p>
      </div>
    </div>
  );
}

export default React.memo(SearchResult);
