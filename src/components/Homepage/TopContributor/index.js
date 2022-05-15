import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTopContributorsData } from '../../../features/topContributorsSlice';

// ? Import style
import './styles.scss';

// const
// contributors =
// ['J-P l\'agitateur', 'Jacky', 'XxPussyHunter*$M\'Lady$*xX', 'Dark Sasuke', 'AmandineDu38'];

function TopContributor() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('https://cinoref-api.herokuapp.com/usertopfive')
      .then((res) => {
        dispatch(setTopContributorsData(res.data));
      });
  }, []);

  // eslint-disable-next-line max-len
  const contributorsData = useSelector((state) => state);
  console.log('topcontri', contributorsData);

  return (
    <div className="contributors">
      <h2 className="contributors-title">Top contributeur</h2>
      <ul>
        {/* {contributorsData.map((contributor, index) => (
          <li className="contributors-items" key={contributor.username}>
            <a href="#" className="contributors-links"> {index + 1} - {contributor.username}</a>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default React.memo(TopContributor);
