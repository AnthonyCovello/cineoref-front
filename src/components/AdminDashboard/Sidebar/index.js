// ? Import modules
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSecurityScan } from 'react-icons/ai';

// ? Import styles
import './styles.scss';

// ? Composant
function Sidebar() {
  return (
    <div className="sidebar w-full bg-[#fff]">
      <div className="contents w-full">
        <AiOutlineSecurityScan className="sidebar-logo my-4 mx-auto text-[5rem] text-porange" />
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
