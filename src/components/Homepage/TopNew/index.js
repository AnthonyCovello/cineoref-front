import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTablist } from '../../../feature/topNewSlice';

// ? Import style
import './styles.scss';

const topRated = [
  'J’ai rêvé qu’il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !',
  'Moi, je m’en fous, si on me force à y retourner, je retiens ma respiration jusqu’à ce qu’on arrête de me forcer à y retourner.',
  'Oh vous, toujours vous, mais allez chier dans une fiole, on verra après.',
  'Ces conneries de gauche et de droite ! Ça veut rien dire ces machins ! Selon comme on est tourné ça change tout !',
  'Faut pas respirer la compote, ça fait tousser.',
];

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
            ? topRated.map((ref) => (
              <li key={ref} className="refList-item">
                <p>{ref}</p>
                <p>Personnage</p>
              </li>
            ))
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
