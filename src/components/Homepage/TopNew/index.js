/* eslint-disable import/no-extraneous-dependencies */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaClosedCaptioning } from 'react-icons/fa';
import ClipboardJS from 'clipboard';
import Tippy from '@tippyjs/react';
import { setTablist } from '../../../features/topNewSlice';
import { setNewRefData } from '../../../features/refSlice';

// ? Import style
import './styles.scss';
import 'tippy.js/dist/tippy.css';

// ? Data fictives
import listOfRefs from '../../../assets/data';

const cleanRefs = listOfRefs.filter((data) => data.status === true && data.mature === false);

// ? Composant
function HomeList() {
  const dispatch = useDispatch();
  const tabList = useSelector(({ topNew }) => topNew.tabList);
  const newRef = useSelector(({ ref }) => ref.newRef);

  //* config module pour copier le texte
  const clipboard = new ClipboardJS('.copy-btn');
  clipboard.on('success', (e) => {
    e.clearSelection();
  });

  // Todo: trouver un moyen d'isoler le tooltip sur le bouton cliqué
  //* tooltip
  const [isVisible, setIsVisible] = useState(null);
  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  useEffect(() => {
    axios
      .get('https://cinoref-api.herokuapp.com/mostrecent')
      .then((res) => {
        dispatch(setNewRefData(res.data));
      });
    clipboard.destroy();
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
                <li key={data.id} className="item flex flex-col justify-between w-3/5 py-4 px-10 rounded-lg">
                  <p className="item-ref my-3 text-lg">{data.ref}</p>
                  <p className="ml-6 max-h-14 text-sm font-bold text-left">{data.character}</p>
                  <Tippy content="Copié !" visible={isVisible}>
                    <span className="cursor-pointer self-end" onClick={handleClick}>
                      <FaClosedCaptioning className="copy-btn inline text-porange text-[1.3rem]" data-clipboard-target=".item-ref" title="Copier le texte" />
                    </span>
                  </Tippy>
                </li>
              )))
            : newRef.map((ref) => (
              <li key={ref.ref} className="item flex flex-col justify-between w-3/5 py-4 px-10 rounded-lg">
                <p className="item-ref my-3 text-lg">{ref.ref}</p>
                <p className="ml-6 max-h-14 text-sm font-bold text-left">{ref.character}</p>
                <Tippy content="Copié !" visible={isVisible}>
                  <span className="cursor-pointer self-end" onClick={handleClick}>
                    <FaClosedCaptioning className="copy-btn inline text-porange text-[1.3rem]" data-clipboard-target=".item-ref" title="Copier le texte" />
                  </span>
                </Tippy>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomeList);
