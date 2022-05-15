// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';

// ? Import style
import './styles.scss';

function TopContributor() {
  // eslint-disable-next-line max-len
  const contributorsData = useSelector(({ contributors }) => contributors.topContributors);

  return (
    <div className="contributors">
      <h2 className="contributors-title">Top contributeurs</h2>
      <ul>
        {contributorsData.map((contributor, index) => (
          <li className="contributors-items" key={contributor.username}>
            <a href="#" className="contributors-links"> {index + 1} - {contributor.username}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TopContributor);
