// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function AnchorListMenu() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6 mt-50rem">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div className="ScrollToElement ">
            {letters.map((letter) => (
              <AnchorLink href={`#${letter}`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">{letter}</AnchorLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(AnchorListMenu);
