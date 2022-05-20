// ? Import modules
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Footer() {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

  return (
    <footer
      className="footer w-full h-20 mt-12 px-4 flex items-center justify-around tablet:mt-8"
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
    >
      <Link to="/" title="Page d'accueil" className="footer-brand flex justify-start">
        <FcFilmReel className="mr-1.5 text-[2rem] " />
        <span>
          <span className="font-bold text-center text-[1.5rem] tablet:text-[1.2rem]">
            Ciné<span className="ospan text-porange">O</span>'Ref
          </span>
          <span className="flex mt-0.5 text-center text-[0.7rem]">© Copyright 2022</span>
        </span>
      </Link>
      <nav className="footer-navbar flex gap-x-6 font-bold tablet:text-[0.75rem] tablet:flex-wrap tablet:gap-x-3 tablet:justify-evenly phone:font-normal">
        <Link to="/proposal">Proposer sa citation</Link>
        <Link to="/team">L'équipe</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/legal-policies">Mentions légales</Link>
        <Link to="/cgu">CGU</Link>
      </nav>
    </footer>
  );
}

export default React.memo(Footer);
