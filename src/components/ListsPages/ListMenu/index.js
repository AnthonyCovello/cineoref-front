// ? Import modules
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

// ? Import style
function ListMenu({ listFilters }) {
  return (
    <nav className="listmenu flex-wrap text-[150%] pb-[1rem] font-bold flex justify-between items-center">
      {listFilters.map((listFilter) => (
        <AnchorLink key={listFilter} href={`#${listFilter}`} className="anchorletter flex py-[0.5rem] flex-row hover:text-porange hover:scale-150 transition duration 150 ease-out hover:ease-in phone:px-[0.2rem] phone:py-[0.1rem] tablet px-[0.5rem]">{listFilter}</AnchorLink>
      ))}
    </nav>
  );
}

ListMenu.propTypes = {
  listFilters: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default React.memo(ListMenu);
