// ? Import modules
import React from 'react';
import PropTypes from 'prop-types';

// ? Import composant
import List from './list';

// ? Import styles
import '../styles.scss';

// ? Composant
function ListTheme({ list, listFilters, listTheme }) {
  const dataMapping = [];

  listFilters.forEach((listFilter) => {
    const datas = list.filter((data) => data.name.startsWith(listFilter)).sort();
    if (datas.length > 0) {
      dataMapping[listFilter] = datas;
    }
  });

  const result = Object.keys(dataMapping).map((key) => [(key), dataMapping[key]]);

  return (
    <div className="ListTheme border-t-4 border-porange border-double">
      {result.map((letter) => (
        <div key={letter[0]} className="mt-4 pb-4 block border-b-2 border-[#1f53b3] border-solid text-center">
          <span id={letter[0]} className="ListThemeLetter py-2 text-[1.5rem] font-bold tablet:text-[1rem]">{letter[0]}</span>
          <ol className="ListThemeContent flex py-1">
            <List letter={letter[1]} listTheme={listTheme} />
          </ol>
        </div>
      ))}
    </div>
  );
}

ListTheme.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  listFilters: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  listTheme: PropTypes.string.isRequired,
};

export default React.memo(ListTheme);
