// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';

// ? Import style

// ? Composant
function SearchResult() {
  const refs = useSelector(({ list }) => list.searchList.getRefBySearchBar);
  const show = useSelector(({ list }) => list.searchList.getShowBySearchBar);
  const characters = useSelector(({ list }) => list.searchList.getCharacterBySearchBar);
  const artists = useSelector(({ list }) => list.searchList.getArtistBySearchBar);
  return (
    <div>
      <div>
        <h3> Refs' </h3>
        {refs.map((item) => (
          <li key={item.id}> {item.ref} </li>
        ))}
      </div>
      <div>
        <h3> Films /séries /animés / dessins-animés </h3>
        {show.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </div>
      <div>
        <h3> Personnages </h3>
        {characters.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </div>
      <div>
        <p> Artistes </p>
        {artists.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </div>
    </div>
  );
}

export default React.memo(SearchResult);
