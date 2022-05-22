// ? Import modules
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// ? Import style
import '../styles.scss';

const listLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const listNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function ListMenu() {
  return (
    <>
      <nav className="text-[1.5rem] flex flex-wrap justify-center gap-2 font-bold tablet:text-[1rem] tablet:gap-1 phone:hidden">
        {listLetters.map((listLetter) => (
          <AnchorLink offset={() => 60} key={listLetter} href={`#${listLetter}`} className="anchorLetter flex flex-row py-1 px-2">{listLetter}</AnchorLink>
        ))}
      </nav>
      <nav className="text-[1.7rem] flex flex-wrap justify-center gap-2 mb-4 font-bold tablet:text-[1.2rem] tablet:gap-1 phone:hidden">
        {listNumbers.map((listNumber) => (
          <AnchorLink offset={() => 60} key={listNumber} href={`#${listNumber}`} className="anchorLetter flex flex-row py-1 px-2">{listNumber}</AnchorLink>
        ))}
      </nav>
    </>
  );
}

export default React.memo(ListMenu);
