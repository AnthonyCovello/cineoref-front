// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ? Import style
import './styles.scss';

// ? Composant
function SearchResult(searchListTheme) {
  const refs = useSelector(({ list }) => list.searchList.getRefBySearchBar);
  const show = useSelector(({ list }) => list.searchList.getShowBySearchBar);
  const characters = useSelector(({ list }) => list.searchList.getCharacterBySearchBar);
  const artists = useSelector(({ list }) => list.searchList.getArtistBySearchBar);
  return (
    <div className="searchListRef w-4/5 mx-auto py-8 px-12 rounded-md h-fit tablet:w-4/5 tablet:py-6 tablet:px-8 phone:w-11/12 phone:py-4 phone:px-2">
      <h3 className="searchRefCathegory flex flex-wrap justify-center mt-4 phone:mt-2"> Films - Séries - Animés - Dessins-animés </h3>
      <ul className="pb-4 border-b-2 border-[#1f53b3] border-solid">
        {show.map((item) => (
          <li key={item.id}>
            <Link
              to={`/${searchListTheme}/${item.category}/${item.id}/refs`}
              key={item.id}
              className="searchLinkToMedia w-[15%] flex flex-col p-2 m-2 rounded tablet:w-[22%] phone:w-[44%]"
            >
              <img className="placeHolder mb-2 rounded" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Placeholder" />
              <p className="SearchLinkToMedia-text font-bold text-center phone:text-[0.8rem]">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="searchRefCathegory searchRefCathegory flex flex-wrap justify-center mt-4 phone:mt-2"> Artistes </h3>
      <ul className="pb-4 border-b-2 border-[#1f53b3] border-solid">
        {artists.map((item) => (
          <li key={item.id}>
            <Link
              to={`/${searchListTheme}/${item.category}/${item.id}/refs`}
              key={item.id}
              className="searchLinkToMedia w-[15%] flex flex-col p-2 m-2 rounded tablet:w-[22%] phone:w-[44%]"
            >
              <img className="placeHolder mb-2 rounded" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Placeholder" />
              <p className="SearchLinkToMedia-text font-bold text-center phone:text-[0.8rem]">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="searchRefCathegory flex flex-wrap justify-center mt-4 phone:mt-2"> Personnages </h3>
      <ul className="pb-4 border-b-2 border-[#1f53b3] border-solid">
        {characters.map((item) => (
          <li key={item.id}>
            <Link
              to={`/${searchListTheme}/${item.category}/${item.id}/refs`}
              key={item.id}
              className="searchLinkToMedia w-[15%] flex flex-col p-2 m-2 rounded tablet:w-[22%] phone:w-[44%]"
            >
              <img className="placeHolder mb-2 rounded" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Placeholder" />
              <p className="SearchLinkToMedia-text font-bold text-center phone:text-[0.8rem]">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="searchRefCathegory flex flex-wrap justify-center mt-4 phone:mt-2"> Références </h3>
      <ul className="pb-4 border-b-2 border-[#1f53b3] border-solid">
        {refs.map((item) => (
          <li key={item.id} className="searchListRef-li max-h-64 p-4 mb-4 leading-6 rounded phone:mb-3 phone:">
            <Link className="SearchListRef-li-item" to={`/ref/${item.id}`}>
              <p className="phone:text-[0.8rem]"><span className="text-[1.125rem] font-bold text-porange phone:text-[0.9rem]">Personnage : </span>{item.character}</p>
              <p className="searchListRef-li-item-ref phone:text-[0.8rem]"><span className="text-[1.125rem] font-bold text-porange phone:text-[0.9rem]">Citation : </span>{item.ref}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(SearchResult);
