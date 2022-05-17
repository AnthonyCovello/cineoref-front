// ? Import modules
import React from 'react';
import PropTypes from 'prop-types';

// ? Import composant
import List from './list';

// ? Composant
function ListTheme({ list, listFilters }) {
  const dataMapping = [];

  listFilters.forEach((listFilter) => {
    const datas = list.filter((data) => data.name.startsWith(listFilter)).sort();
    if (datas.length > 0) {
      dataMapping[listFilter] = datas;
    }
  });

  const result = Object.keys(dataMapping).map((key) => [(key), dataMapping[key]]);

  return (
    <div className="ListTheme">
      {result.map((letter) => (
        <div key={letter[0]}>
          <span id={letter[0]}>{letter[0]}</span>
          <ol>
            <List letter={letter[1]} />
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
};

export default React.memo(ListTheme);
