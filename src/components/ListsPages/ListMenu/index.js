// ? Import modules
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

// ? Import style

// ? Composant
function ListMenu({ listFilters }) {
  return (
    <nav className="listmenu">
      {listFilters.map((listFilter) => (
        <AnchorLink key={listFilter} href={`#${listFilter}`}>{listFilter}</AnchorLink>
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
