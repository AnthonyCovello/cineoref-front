// ? Import modules
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

// ? Import style
import './styles.scss';

// ? Composant
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
