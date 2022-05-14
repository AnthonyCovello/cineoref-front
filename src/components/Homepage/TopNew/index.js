// ? Import modules
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTablist } from '../../../features/topNewSlice';
import { setNewRefData } from '../../../features/refSlice';

// ? Import style
import './styles.scss';

// ? Data fictives
import listOfRefs from '../../../assets/data';

const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);

// ? Composant
function HomeList() {
  const dispatch = useDispatch();
  const tabList = useSelector(({ topNew }) => topNew.tabList);
  const newRef = useSelector(({ ref }) => ref.newRef);

  useEffect(() => {
    axios
      .get('https://cinoref-api.herokuapp.com/mostrecent')
      .then((res) => {
        dispatch(setNewRefData(res.data));
        console.log(res);
      });
  }, []);

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
            : newRef.map((ref) => (
              <li key={ref.ref} className="refList-item">
                <p>{ref.ref}</p>
                <p>{ref.character}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomeList);
