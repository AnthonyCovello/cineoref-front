// ? Import modules
import React from 'react';
import { FcFilmReel } from 'react-icons/fc';
// ? Import style
import './styles.scss';
// ? Composant

function Footer() {
  return (
    <footer className="footer">
      <a href="/" className="footer-brand">
        <FcFilmReel className="footer-brand-logo" />
        <span className="footer-brand-title-copyright">
          <span className="footer-brand-title">Cin<span>O</span>'Ref</span>
          <span className="copyright">© Copyright 2022</span>
        </span>
      </a>
      <nav className="footer-navbar">
        <a href="#">Proposer sa citation</a>
        <a href="#">L'équipe</a>
        <a href="#">Contact</a>
        <a href="#">Mentions légales</a>
        <a href="#">Conditions générales d'utilisation</a>
      </nav>
    </footer>
  );
}

export default React.memo(Footer);
