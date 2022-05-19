// ? Import modules
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

// ? Import style
function ListMenu({ listFilters }) {
  return (
    <nav className="listmenu text-[150%] pb-[1rem] font-bold flex justify-between items-center">
      {listFilters.map((listFilter) => (
        <AnchorLink key={listFilter} href={`#${listFilter}`} className="anchorletter hover:text-porange hover:scale-150 transition duration 150 ease-out hover:ease-in">{listFilter}</AnchorLink>
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
