import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTablist } from '../../../features/topNewSlice';

// ? Import style
import './styles.scss';

// ? Data fictives
import listOfRefs from '../../../assets/data';

const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);

const newests = ['blibli1', 'blibli2', 'blibli3', 'bliblicar', 'blibli5'];

// ? Composant
function HomeList() {
  const tabList = useSelector(({ topNew }) => topNew.tabList);
  const dispatch = useDispatch();

  return (
    <div className="citation">
      <nav className="citation-nav">
        <div
          onClick={() => dispatch(setTablist('topRated'))}
          className={
            tabList !== 'topRated'
              ? 'citation-nav-topleft inactiveTab'
              : 'citation-nav-topleft'
          }
        >
          <span>Les mieux notées</span>
        </div>
        <div
          onClick={() => dispatch(setTablist('newests'))}
          className={
            tabList !== 'newests'
              ? 'citation-nav-topright inactiveTab'
              : 'citation-nav-topright'
          }
        >
          <span>Les plus récentes</span>
        </div>
      </nav>
      <div>
        <ul className="refList">
          {tabList === 'topRated'
            ? cleanRefs.map((data, index) => (
              index < 5 && (
              <li key={data.id} className="refList-item">
                <p>{data.ref}</p>
                <p>{data.character}</p>
              </li>
              )))
            : newests.map((ref) => (
              <li key={ref} className="refList-item">
                <p>{ref}</p>
                <p>Personnage</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomeList);
