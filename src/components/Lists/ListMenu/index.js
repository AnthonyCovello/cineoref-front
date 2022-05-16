// ? Import modules
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// ? Composant
function ListMenu() {
  return (
    <nav className="listmenu">
      <div className="ScrollToElement  w-2/5 h-[17rem] rounded-3xl py-8 px-10 flex justify-between text-[1.25rem] font-medium cursor-context-menu">
        {letters.map((letter) => (
          <AnchorLink key={letter} href={`#${letter}`}>{letter}</AnchorLink>
        ))}
      </div>
    </nav>
  );
}

export default React.memo(ListMenu);
