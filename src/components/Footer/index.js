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
      className="footer"
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
    >
      <Link to="/" title="Page d'accueil" className="footer-brand">
        <FcFilmReel className="footer-brand-logo" />
        <span className="footer-brand-title-copyright">
          <span className="footer-brand-title">Ciné<span>O</span>'Ref</span>
          <span className="copyright">© Copyright 2022</span>
        </span>
      </Link>
      <nav className="footer-navbar">
        <Link to="/proposal">Proposer sa citation</Link>
        <Link to="/team">L'équipe</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/legal-policies">Mentions légales</Link>
        <Link to="/cgu">Conditions générales d'utilisation</Link>
      </nav>
    </footer>
  );
}

export default React.memo(Footer);
