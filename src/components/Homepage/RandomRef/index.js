/* eslint-disable import/no-extraneous-dependencies */
// ? Import modules
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiClipboardCopy } from 'react-icons/hi';
import ClipboardJS from 'clipboard';
import Tippy from '@tippyjs/react';
import { setRandomRefData } from '../../../features/refSlice';

// ? Import style
import './styles.scss';
import 'tippy.js/dist/tippy.css';
import randomDice from '../../../assets/randomDice.png';

// ? Composant
function RandomRef() {
  const dispatch = useDispatch();
  const randomRefData = useSelector(({ ref }) => ref.randomRef);

  // config module pour copier le texte
  const clipboard = new ClipboardJS('.copy-btn');
  clipboard.on('success', (e) => {
    e.clearSelection();
    console.info('Action:', e.action);
    console.info('Text:', e.text);
  });
  const [isVisible, setIsVisible] = useState(null);
  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const randomRefApi = () => {
    axios
      .get('https://cinoref-api.herokuapp.com/random')
      .then((res) => {
        dispatch(setRandomRefData(res.data));
      });
  };

  const getNewRandomRef = () => {
    randomRefApi();
  };

  useEffect(() => {
    randomRefApi();
    clipboard.destroy();
  }, []);

  return (
    <div className="randomRef w-2/5 h-[17rem] rounded-3xl py-8 px-10 flex flex-col justify-between text-[1.25rem] font-medium cursor-context-menu">
      <span type="button" className="self-end cursor-pointer" onClick={getNewRandomRef}>
        <img src={randomDice} className="w-11 h-11" title="Afficher une citation aléatoire" alt="dé à 20 faces" />
      </span>
      <p className="randomRef-text">{randomRefData.ref}</p>
      <span className="ml-8 mt-6 text-[1.30rem]">{randomRefData.character}</span>
      <Tippy content="Copié !" visible={isVisible}>
        <span className="self-end cursor-pointer" onClick={handleClick}>
          <HiClipboardCopy className="copy-btn text-porange text-[1.3rem]" data-clipboard-target=".randomRef-text" title="Copier le texte" />
        </span>
      </Tippy>
    </div>
  );
}

export default React.memo(RandomRef);
