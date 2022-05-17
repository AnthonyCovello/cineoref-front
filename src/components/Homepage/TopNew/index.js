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
      });
  }, []);

  return (
    <div className="citation w-3/4 mx-auto rounded-xl text-center">
      <nav className="flex justify-around items-center text-xl font-bold text-porange cursor-pointer">
        <div
          onClick={() => dispatch(setTablist('topRated'))}
          className={
            tabList !== 'topRated'
              ? 'topleft w-1/2 p-2 rounded-tl-lg inactiveTab'
              : 'topleft w-1/2 p-2 rounded-tl-lg'
          }
        >
          Les mieux notées
        </div>
        <div
          onClick={() => dispatch(setTablist('newests'))}
          className={
            tabList !== 'newests'
              ? 'topright w-1/2 p-2 rounded-tr-lg inactiveTab'
              : 'topright w-1/2 p-2 rounded-tr-lg'
          }
        >
          Les plus récentes
        </div>
      </nav>
      <div>
        <ul className="flex flex-col p-10 gap-8 items-start cursor-context-menu">
          {tabList === 'topRated'
            ? cleanRefs.map((data, index) => (
              index < 5 && (
                <li key={data.id} className="item w-3/5 py-8 px-10 rounded-lg">
                  <p className="item-ref">{data.ref}</p>
                  <p className="mt-6 ml-6 max-h-14 text-sm font-bold text-left">{data.character}</p>
                </li>
              )))
            : newRef.map((ref) => (
              <li key={ref.ref} className="item w-3/5 py-8 px-10 rounded-lg">
                <p className="item-ref">{ref.ref}</p>
                <p className="mt-6 ml-6 max-h-14 text-sm font-bold text-left">{ref.character}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomeList);
