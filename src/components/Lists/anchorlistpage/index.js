// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// ? Import style
import '../../../styles/index.scss';

// const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function AnchorListPage() {
  return (
    <div classNeme="ScrollToElement">
      {letters.map((letter) => (
        <AnchorLink href={`#${letter}`} className="bg-white">{letter}</AnchorLink>
      ))}
    </div>
  );
}

export default React.memo(AnchorListPage);
