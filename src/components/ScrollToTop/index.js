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
    <div className="relative">
      {showTopBtn && (
        <FaAngleUp
          className="icon-position-style w-12 h-12 fixed z-10 bottom-20 right-2 rounded-full cursor-pointer phone:w-10 phone:h-10"
          onClick={goToTop}
        />
      )}
    </div>
  );
}

export default ScrollToTop;
