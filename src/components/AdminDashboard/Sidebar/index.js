/* eslint-disable react/no-array-index-key */
// ? Import modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { FaBars, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SidebarData } from '../Data';
import { setSidebarSelected } from '../../../features/adminSlice';

// ? Import styles
import './styles.scss';

// ? Composant
function Sidebar() {
  const dispatch = useDispatch();
  const selected = useSelector(({ admin }) => admin.sidebarSelected);
  const [expanded, setExpaned] = useState(true);
  const sidebarVariants = {
    true: { left: '0' },
    false: { left: '-75%' },
  };

  useEffect(() => dispatch(setSidebarSelected(1)), []);

  return (
    <>
      {/* Logo */}
      <div className="bars hidden phone:flex fixed z-10 top-12 left-[0.8rem] p-2 rounded-md" onClick={() => setExpaned(!expanded)}>
        <FaBars />
      </div>
      <motion.div
        className="sidebar flex flex-col relative w-full phone:fixed phone:z-10 phone:w-9/12 phone:pr-4"
        variants={sidebarVariants}
        animate={window.innerWidth <= 480 ? `${expanded}` : ''}
      >
        <div className="contents w-full">
          <AiOutlineSecurityScan className="mt-6 mx-auto text-[5rem] text-porange" alt="logo" />
        </div>

        {/* Menu */}
        <div className="sidebar-menu flex flex-col gap-8 mt-16 tablet:mt-12">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => dispatch(setSidebarSelected(index))}
            >
              <item.icon className="text-[1.5rem]" />
              <span>{item.heading}</span>
            </div>
          ))}
          <div className="">
            <Link to="/" className="menuItem p-2 text-[1.5rem]" title="Page d'accueil">
              <FaSignInAlt />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default React.memo(Sidebar);
