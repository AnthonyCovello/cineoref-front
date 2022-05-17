// ? Import modules
import React from 'react';
import PropTypes from 'prop-types';

// ? Import composant
import List from './list';

// ? Composant
function ListCategory({ list, listFilters }) {
  // console.log('list:', list);
  // console.log('listFilter', listFilters);
  const dataMapping = [];

  listFilters.forEach((listFilter) => {
    const datas = list.filter((data) => data.name.startsWith(listFilter)).sort();
    if (datas.length > 0) {
      dataMapping[listFilter] = datas;
    }
  });

  const result = Object.keys(dataMapping).map((key) => [(key), dataMapping[key]]);

  return (
    <div className="ListCategory w-1/5 p-8 cursor-context-menu text-[1.25rem] font-bold rounded-3xl">
      <div>
        <h2 className="letters mb-2.5 text-3xl text-center"> </h2>
        {result.map((letter) => (
          <div key={letter[0]}>
            <span id={letter[0]}>{letter[0]}</span>
            <ul>
              <List letter={letter[1]} />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

ListCategory.propTypes = {
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

export default React.memo(ListCategory);
