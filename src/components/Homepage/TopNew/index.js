import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTablist } from '../../../feature/topNewSlice';

// ? Import style
import './styles.scss';

const topRated = ['blabla1', 'blabla2', 'blabla3', 'blablacar', 'blabla5'];

const newests = ['blibli1', 'blibli2', 'blibli3', 'bliblicar', 'blibli5'];

// ? Composant
function HomeList() {
  const tabList = useSelector(({ topNew }) => topNew.tabList);
  const dispatch = useDispatch();
  const handleTabs = (event) => {
    dispatch(setTablist(event.target.value));
  };

  return (
    <div className="citation">
      <nav className="citation-nav">
        <button
          type="button"
          className="citation-nav-btn"
          onClick={handleTabs}
          value="topRated"
        >
          Les mieux notées
        </button>
        <button
          type="button"
          className="citation-nav-btn"
          onClick={handleTabs}
          value="newests"
        >
          Les plus récentes
        </button>
      </nav>
      <div>
        <ul>
          {tabList === 'topRated'
            ? topRated.map((ref) => (
              <li key={ref} className="refList">
                <p>{ref}</p>
              </li>
            ))
            : newests.map((ref) => (
              <li key={ref} className="refList">
                <p>{ref}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomeList);
