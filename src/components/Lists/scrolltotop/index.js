import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import './styles.scss';

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      }
      else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bottom-to-top">
      {' '}
      {showTopBtn && (
        <FaAngleUp
          className="icon-position-style"
          onClick={goToTop}
        />
      )}{' '}
    </div>
  );
}

export default ScrollToTop;

/*
// scroll to top button object
function ScrollToTop() {
  return (
    <div className="bottom-to-top">
      <FaAngleUp className="icon-position-style" />
    </div>
  );
}

//  button toggle control
const [showTopBtn, setShowTopBtn] = useState(false);

// appear after 400 pixels of scrolling
useEffect(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    }
    else {
      setShowTopBtn(false);
    }
  });
}, []);

// click event handler
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};  */
